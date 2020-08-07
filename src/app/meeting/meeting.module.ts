import { DropdownModule } from 'primeng';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedcomponentModule } from '../shared/sharedcomponent.module';
import { AddMeetingComponent } from './add-meeting/add-meeting.component';
import { MeetingRoutingModule } from './meeting-routing.module';
import { ViewMeetingComponent } from './view-meeting/view-meeting.component';

@NgModule({
  declarations: [ViewMeetingComponent, AddMeetingComponent],
  imports: [
    CommonModule,
    DragDropModule,
    FileUploadModule,
    DialogModule,
    CalendarModule,
    FormsModule,
    TableModule,
    TooltipModule,
    MultiSelectModule,
    DropdownModule,
    ReactiveFormsModule,
    SharedcomponentModule,
    MeetingRoutingModule
  ]
})
export class MeetingModule {}
