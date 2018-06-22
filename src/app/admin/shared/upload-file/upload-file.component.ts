import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({selector: 'app-upload-file',
 templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']})
export class UploadFileComponent implements OnInit {

  @Input()isUploadBtn : boolean = true;
  @Output()onUploadEvent = new EventEmitter < FormData > ();
  
  constructor() {}

  ngOnInit() {}
  
  fileChange(event) {

    let fileList : FileList = event.target.files;
    if (fileList.length > 0) {
      let file : File = fileList[0];
      let formData : FormData = new FormData();
      formData.append('UploadedImage', file, file.name);

      this.onUploadEvent.emit(formData);

    }

  }
}
