import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NotificationService } from '../../shared/notification/notification.service';
import { MeetingService } from '../meeting.service';

@Component({
  selector: 'app-view-meeting',
  templateUrl: './view-meeting.component.html',
  styleUrls: ['./view-meeting.component.scss']
})
export class ViewMeetingComponent implements OnInit {
  loading: boolean;
  formData: any;
  cols: { field: string; header: string }[];
  names: { label: string; value: string }[];
  dates: { label: string; value: string }[];

  constructor(
    private meetingService: MeetingService,
    public msg: NotificationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loading = true;
    this.meetingService.setPreviousData();
    this.getFormData();
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'date', header: 'Date' },
      { field: 'address', header: 'Address' }
    ];
  }

  getFormData(): void {
    this.names = [];
    this.dates = [];
    const retrievedObject = localStorage.getItem('formData');
    this.formData = JSON.parse(retrievedObject);
    if (this.formData.length === 0) {
      this.router.navigate(['/form/add']);
    }
    this.formData.forEach(ele => {
      this.names = this.names.filter(
        (name, index, self) =>
          index === self.findIndex(item => item.label === name.label)
      );
      this.dates = this.dates.filter(
        (date, index, self) =>
          index === self.findIndex(item => item.label === date.label)
      );
      this.names.push({ label: ele.name, value: ele.name });
      this.dates.push({ label: ele.date, value: ele.date });
    });
    if (this.formData.length > 0) {
      this.msg.addMessageToNotification(
        'success',
        'Success',
        'Table loaded successfully'
      );
    }
    this.loading = false;
  }
}
