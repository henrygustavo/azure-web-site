import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../shared/services/menu.service';
import { ImageService } from '../../services/image.service';
import { Image } from '../../models/image';
import { MessageAlertHandleService } from '../../../shared/services/message-alert.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-image-recognition-list',
  templateUrl: './image-recognition-list.component.html',
  styleUrls: ['./image-recognition-list.component.css']
})
export class ImageRecognitionListComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;

  images: Image[] = [];

  constructor(private _menuService: MenuService,
    private _messageAlertHandleService: MessageAlertHandleService,
    private _imageService: ImageService) { }

  ngOnInit() {

    this._menuService.selectMenuItem('images');

    this.loadImages();
  }

  loadImages(): void {

    this.blockUI.start();
    this._imageService.getAll().subscribe(
      (response: Image[]) => {
        this.images = response;
        this.blockUI.stop();
      },
      (error: any) => {
        this._messageAlertHandleService.handleError(error);
        this.blockUI.stop();
      }
    );
  }

}
