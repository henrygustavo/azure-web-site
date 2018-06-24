import { Component} from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
export interface DetailModel {
  title: string;
  response: any;
}
@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})

export class ModalDialogComponent extends DialogComponent<DetailModel, boolean> implements DetailModel {
  title: string;
  response: any;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  confirm() {
    this.result = true;
    this.close();
  }
}
