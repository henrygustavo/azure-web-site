import { Route, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { ModuleWithProviders } from '@angular/core';
import { AdminGuard } from './guards/admin.guard';
import { FaceRecognitionListComponent } from './faces/face-recognition-list/face-recognition-list.component';
import { ImageRecognitionListComponent } from './images/image-recognition-list/image-recognition-list.component';
import { FaceRecognitionAddComponent } from './faces/face-recognition-add/face-recognition-add.component';
import { ImageRecognitionAddComponent } from './images/image-recognition-add/image-recognition-add.component';

const routes: Route[] = [
    {
        path: 'dashboard',
        component: DashBoardComponent,
        canActivate: [AdminGuard]
    },
    {
        path: 'faces',
        component: FaceRecognitionListComponent,
        canActivate: [AdminGuard]
    },
    {
        path: 'faces/add',
        component: FaceRecognitionAddComponent,
        canActivate: [AdminGuard]
    },
    {
        path: 'images',
        component: ImageRecognitionListComponent,
        canActivate: [AdminGuard]
    },
    {
        path: 'images/add',
        component: ImageRecognitionAddComponent,
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

