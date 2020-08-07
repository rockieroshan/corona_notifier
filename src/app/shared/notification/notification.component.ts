import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';

import { MessageState, NotificationService } from './notification.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass']
})
export class NotificationComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  life = 5000;
  constructor(
    private notification: NotificationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.notification.loaderState.pipe(takeUntil(this.destroy$)).subscribe(
      (state: MessageState) => {
        this.messageService.clear();
        this.messageService.add(state);
      },
      err => {
        // console.log(err);
      }
    );
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
