import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../shared/services/menu.service';
import { ImageService } from '../services/image.service';
import { Image } from '../models/image';
import { MessageAlertHandleService } from '../../shared/services/message-alert.service';

@Component({
  selector: 'app-image-recognition',
  templateUrl: './image-recognition.component.html',
  styleUrls: ['./image-recognition.component.css']
})
export class ImageRecognitionComponent implements OnInit {

  constructor(private _menuService: MenuService,
              private _messageAlertHandleService: MessageAlertHandleService,
              private _imageService: ImageService) { }

  ngOnInit() {

    this._menuService.selectMenuItem('images');

    this._imageService.get().subscribe(
      (response: Image) => {
            console.log(response);
      },
      (error: any) => {
                  this._messageAlertHandleService.handleError(error);
      }
  );

  }

}
