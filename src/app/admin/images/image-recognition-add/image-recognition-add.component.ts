import {Component, OnInit} from '@angular/core';
import { MenuService } from '../../../shared/services/menu.service';
import { MessageAlertHandleService } from '../../../shared/services/message-alert.service';
import { ImageService } from '../../services/image.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component(
  {
    selector: 'app-image-recognition-add', 
    templateUrl: './image-recognition-add.component.html', 
    styleUrls: ['./image-recognition-add.component.css']})
export class ImageRecognitionAddComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  public isUploadBtn : boolean = true;

  constructor(private _menuService: MenuService,
    private _messageAlertHandleService: MessageAlertHandleService,
    private _imageService: ImageService) { }

  ngOnInit() {

    this._menuService.selectMenuItem('images');
  }  
  
  onUploadEvent(formData: FormData){
    this.blockUI.start();
    this._imageService.uploadImage(formData).subscribe(
      (response: any) => {    
            console.log(response);
            this.blockUI.stop();
      },
      (error: any) => {
             this._messageAlertHandleService.handleError(error);
             this.blockUI.stop();
      });
  }
  
}
