import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../shared/services/menu.service';
import { FaceService } from '../services/face.service';
import { Face } from '../models/face';
import { MessageAlertHandleService } from '../../shared/services/message-alert.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-face-recognition',
  templateUrl: './face-recognition.component.html',
  styleUrls: ['./face-recognition.component.css']
})
export class FaceRecognitionComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;

  public faces: Face[] = [];

  constructor( private _menuService: MenuService,
               private _messageAlertHandleService: MessageAlertHandleService,
               private _faceService: FaceService) { }

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

}
