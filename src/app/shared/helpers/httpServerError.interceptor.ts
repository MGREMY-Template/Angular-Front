import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";

import { NotificationService } from "../services/notification.service";
import { NotificationDto } from "../models/hub/NotificationDto";

import Settings from "../../../assets/settings.json";
import { Result } from "../models/api/Result";

@Injectable()
export class HttpServerErrorInterceptor implements HttpInterceptor {
  constructor(protected notificationService: NotificationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (req.url.startsWith(Settings.API_URL)) {
          let resultError: Result<any> = err.error as Result<any>;

          if ((resultError.isSuccess || resultError.isFailure) && resultError.messages) {
            var notifications: NotificationDto[] = [];

            resultError.messages.forEach(x => notifications.push({ title: `Error ${resultError.statusCode}`, content: x }));

            this.notificationService.newNotifications(notifications);

            return throwError(() => err);
          }
        }

        this.notificationService.newNotification({ title: `${err.status} ${err.statusText}`, content: `${String(err.error).split('\r\n')[0]}` });

        return throwError(() => err);
      }),
    );
  }
}
