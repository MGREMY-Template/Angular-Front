import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { NotificationDto } from "../models/hub/NotificationDto";

@Injectable({
  providedIn: "root"
})
export class NotificationService {
  private notification = new Subject<NotificationDto>();

  public get(): Observable<NotificationDto> {
    return this.notification.asObservable();
  }

  public newNotification(notification: NotificationDto): void {
    this.notification.next(notification);
  }

  public newNotifications(notifications: NotificationDto[]): void {
    notifications.forEach(x => this.newNotification(x));
  }
}
