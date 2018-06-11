import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

import { NgxPermissionsModule } from 'ngx-permissions';
import { Ng2UiAuthModule } from 'ng2-ui-auth';
import { AuthConfig } from './authConfig';
import { ToastModule } from 'ng2-toastr';
import { BlockUIModule } from 'ng-block-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MessageAlertHandleService } from './shared/message-alert-handle.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Ng2UiAuthModule.forRoot(AuthConfig),
    ToastModule.forRoot(),
    NgxPermissionsModule.forRoot(),
    BlockUIModule,
    appRoutes
  ],
  providers: [MessageAlertHandleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
