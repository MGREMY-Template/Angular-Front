import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

import { Observable, Subscription, of } from 'rxjs';

import { NotificationService } from '../../services/notification.service';
import { NotificationDto } from '../../models/hub/NotificationDto';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, OnDestroy {
  protected notifications: NotificationDto[] = [];
  private notificationSubscription: Subscription | undefined;

  constructor(protected notificationService: NotificationService) { }

  public getNotifications(): Observable<NotificationDto[]> {
    return of(this.notifications);
  }

  public deleteNotification(notification: NotificationDto): void {
    this.notifications = this.notifications.filter(x => x !== notification);
  }

  ngOnInit(): void {
    this.notificationSubscription = this.notificationService.get()
      .subscribe(x => this.notifications.push(x));
  }

  ngOnDestroy(): void {
    this.notificationSubscription?.unsubscribe();
  }
}
