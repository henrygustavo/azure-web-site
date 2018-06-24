import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { adminRoutes } from './admin.routes';
import { AdminGuard } from './guards/admin.guard';
import { ImageService } from './services/image.service';
import { FaceService } from './services/face.service';
import { FaceRecognitionListComponent } from './faces/face-recognition-list/face-recognition-list.component';
import { ImageRecognitionListComponent } from './images/image-recognition-list/image-recognition-list.component';
import { FaceRecognitionAddComponent } from './faces/face-recognition-add/face-recognition-add.component';
import { ImageRecognitionAddComponent } from './images/image-recognition-add/image-recognition-add.component';
import { UploadFileComponent } from './shared/upload-file/upload-file.component';
import { ImageJsonViewComponent } from './shared/image-json-view/image-json-view.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ModalDialogComponent } from './shared/modal-dialog/modal-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    adminRoutes,
    BootstrapModalModule
  ],
  declarations: [DashBoardComponent, FaceRecognitionListComponent, FaceRecognitionAddComponent,
                ImageRecognitionListComponent, ImageRecognitionAddComponent,
                UploadFileComponent, ImageJsonViewComponent, ModalDialogComponent],
  entryComponents: [ModalDialogComponent],
  providers: [AdminGuard, ImageService, FaceService]

})
export class AdminModule { }

