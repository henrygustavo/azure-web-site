import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../shared/services/menu.service';
import { FaceService } from '../../services/face.service';
import { Face } from '../../models/face';
import { MessageAlertHandleService } from '../../../shared/services/message-alert.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { DialogService } from 'ng2-bootstrap-modal';
import { ModalDialogComponent } from '../../shared/modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-face-recognition-list',
  templateUrl: './face-recognition-list.component.html',
  styleUrls: ['./face-recognition-list.component.css']
})
export class FaceRecognitionListComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;

  public faces: Face[] = [];

  constructor(private _menuService: MenuService,
    private _messageAlertHandleService: MessageAlertHandleService,
    private _faceService: FaceService,
    private dialogService: DialogService) { }

  ngOnInit() {
    this.blockUI.start();
    this._menuService.selectMenuItem('faces');
    this.loadFaces();
  }

  loadFaces(): void {

    this._faceService.getAll().subscribe(
      (response: Face[]) => {
        this.faces = response;
        this.blockUI.stop();
      },
      (error: any) => {
        this._messageAlertHandleService.handleError(error);
        this.blockUI.stop();
      });
  }

  showDetail(imageId: string) {

    this.blockUI.start();
    this._faceService.get(imageId).subscribe(
      (response: any) => {
      this.displayDialog(response);
        this.blockUI.stop();
      },
      (error: any) => {
        this._messageAlertHandleService.handleError(error);
        this.blockUI.stop();
      });
  }

  displayDialog(response: any): void {
    let disposable = this.dialogService.addDialog(ModalDialogComponent, {
      title: 'Detail',
      response: response
    })
      .subscribe(() => {

      });

    setTimeout(() => {
      disposable.unsubscribe();
    }, 10000);
  }
}
