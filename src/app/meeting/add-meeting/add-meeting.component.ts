import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NotificationService } from '../../shared/notification/notification.service';
import { MeetingService } from '../meeting.service';

@Component({
  selector: 'app-add-meeting',
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.scss']
})
export class AddMeetingComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  meetingForm: FormGroup;
  loading: boolean;
  constructor(
    private meetingService: MeetingService,
    private router: Router,
    private formbuilder: FormBuilder,
    public msg: NotificationService
  ) {}

  ngOnInit() {
    this.accessLocation();
    this.meetingForm = this.formbuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      date: ['', [Validators.required]]
    });
  }

  accessLocation(): void {
    navigator.geolocation.getCurrentPosition(position => {
      this.loading = true;
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      this.meetingService
        .getGeoLocation(latitude.toFixed(2), longitude.toFixed(2))
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          locationDetails => {
            const {
              city,
              postcode,
              road,
              country
            } = locationDetails.results[0].components;
            const address = `${road} ${city} ${country} ${postcode}`;
            // tslint:disable-next-line:no-string-literal
            this.meetingForm.controls['address'].setValue(address);
            this.loading = false;
          },
          error => {
            this.loading = false;
            this.msg.addMessageToNotification('error', 'Error', error);
          }
        );
    });
    this.loading = false;
  }

  onSubmit(form: FormGroup): void {
    const formData = [
      {
        name: form.value.name,
        date: form.value.date.map(ele => ele.toString().split('GMT')[0]),
        address: form.value.address
      }
    ];
    this.meetingService.setFormDataLocal(formData);
    this.router.navigate(['/form/view']);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
