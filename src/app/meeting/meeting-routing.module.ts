import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddMeetingComponent } from './add-meeting/add-meeting.component';
import { ViewMeetingComponent } from './view-meeting/view-meeting.component';

const routes: Routes = [
  { path: 'view', component: ViewMeetingComponent },
  { path: 'add', component: AddMeetingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingRoutingModule {}
