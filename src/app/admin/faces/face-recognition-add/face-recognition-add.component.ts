import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../shared/services/menu.service';
import { MessageAlertHandleService } from '../../../shared/services/message-alert.service';
import { FaceService } from '../../services/face.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-face-recognition-add',
  templateUrl: './face-recognition-add.component.html',
  styleUrls: ['./face-recognition-add.component.css']
})
export class FaceRecognitionAddComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  public isUploadBtn = true;
  public response: any;

  constructor( private _menuService: MenuService,
    private _messageAlertHandleService: MessageAlertHandleService,
    private _faceService: FaceService) { }

  ngOnInit() {
    this._menuService.selectMenuItem('faces');
  }

  onUploadEvent(formData: FormData) {

    this.blockUI.start();
    this._faceService.uploadImage(formData).subscribe(
      (response: any) => {
            this.response = response;
            this.blockUI.stop();
      },
      (error: any) => {
             this._messageAlertHandleService.handleError(error);
             this.blockUI.stop();
      });
  }
}
