// Primeng components
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule
} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackendInterceptor } from './interceptors/backend.interceptors';
import { AuthGuard } from './login/auth-gaurd';
import { LoginComponent } from './login/longin-component/login.component';
// shared components module
import { NotificationService } from './shared/notification/notification.service';
import { SharedcomponentModule } from './shared/sharedcomponent.module';
import { MeetingModule } from './meeting/meeting.module';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    SharedcomponentModule,
    DialogModule,
    DropdownModule,
    OverlayPanelModule,
    MeetingModule,
    DragDropModule
  ],
  providers: [
    AuthGuard,
    NotificationService,
    { provide: HTTP_INTERCEPTORS, useClass: BackendInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
