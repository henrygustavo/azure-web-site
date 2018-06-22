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

@NgModule({
  imports: [
    CommonModule,
    adminRoutes
  ],
  declarations: [DashBoardComponent, FaceRecognitionListComponent,FaceRecognitionAddComponent,
                ImageRecognitionListComponent, ImageRecognitionAddComponent],
  providers: [AdminGuard, ImageService, FaceService]

})
export class AdminModule { }

