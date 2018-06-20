import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { adminRoutes } from './admin.routes';
import { AdminGuard } from './guards/admin.guard';
import { FaceRecognitionComponent } from './face-recognition/face-recognition.component';
import { ImageRecognitionComponent } from './image-recognition/image-recognition.component';
import { ImageService } from './services/image.service';
import { FaceService } from './services/face.service';

@NgModule({
  imports: [
    CommonModule,
    adminRoutes
  ],
  declarations: [DashBoardComponent, FaceRecognitionComponent, ImageRecognitionComponent],
  providers: [AdminGuard, ImageService, FaceService]

})
export class AdminModule { }

