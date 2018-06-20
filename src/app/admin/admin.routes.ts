import { Route, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { ModuleWithProviders } from '@angular/core';
import { AdminGuard } from './guards/admin.guard';
import { FaceRecognitionComponent } from './face-recognition/face-recognition.component';
import { ImageRecognitionComponent } from './image-recognition/image-recognition.component';

const routes: Route[] = [
    {
        path: 'dashboard',
        component: DashBoardComponent,
        canActivate: [AdminGuard]
    },
    {
        path: 'faces',
        component: FaceRecognitionComponent,
        canActivate: [AdminGuard]
    },
    {
        path: 'images',
        component: ImageRecognitionComponent,
        canActivate: [AdminGuard]
    },
    {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        canActivate: [AdminGuard]
    }
];

export const adminRoutes: ModuleWithProviders = RouterModule.forChild(routes);

