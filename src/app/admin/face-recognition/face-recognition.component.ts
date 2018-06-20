import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../shared/services/menu.service';
import { FaceService } from '../services/face.service';
import { Face } from '../models/face';
import { MessageAlertHandleService } from '../../shared/services/message-alert.service';

@Component({
  selector: 'app-face-recognition',
  templateUrl: './face-recognition.component.html',
  styleUrls: ['./face-recognition.component.css']
})
export class FaceRecognitionComponent implements OnInit {

  constructor( private _menuService: MenuService,
               private _messageAlertHandleService: MessageAlertHandleService,
               private _faceService: FaceService) { }

  ngOnInit() {

    this._menuService.selectMenuItem('faces');

    this._faceService.get().subscribe(
      (response: Face) => {
            console.log(response);
      },
      (error: any) => {
                  this._messageAlertHandleService.handleError(error);
      });
  }

}
