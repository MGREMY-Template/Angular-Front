import { HubConnection, HubConnectionBuilder, HubConnectionState } from '@microsoft/signalr';

import { Injectable } from "@angular/core";
import Settings from '../../../assets/settings.json';
import { LocalStorageService } from './localstorage.service';
import { NotificationDto } from '../models/hub/NotificationDto';
import { NotificationService } from './notification.service';
import { SignalRConnectionMapping } from '../mappings/signalRConnection.mapping';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private static _connections: SignalRConnectionMapping<string> = new SignalRConnectionMapping<string>();

  constructor(private localStorageService: LocalStorageService, private notificationService: NotificationService) { }

  async connect(userId: string): Promise<void> {
    var sessionId = this.localStorageService.getData<string>("signalR_session_id");
    var connection = SignalRService._connections.getConnection(userId, sessionId);

    if (!connection) {
      connection = new HubConnectionBuilder()
        .withUrl(`${Settings.API_URL}/hub/notification`, {
          accessTokenFactory: () => this.localStorageService.getToken(),
        })
        .withAutomaticReconnect()
        .build();
    }

    try {
      await connection.start();
      console.log(`SignalR connection success. ConnectionId: ${connection?.connectionId}`);
      this.localStorageService.setData("signalR_session_id", connection.connectionId);
      SignalRService._connections.add(userId, connection);
      this.initLogin(connection);
    } catch (error) {
      console.log(`SignalR connection error : ${error}`)
    }
  }

  async disconnect(userId: string): Promise<void> {
    var sessionId = this.localStorageService.getData<string>("signalR_session_id");
    var connection = SignalRService._connections.getConnection(userId, sessionId);

    if (connection) {
      connection.stop();
      SignalRService._connections.remove(userId, connection);
    }
  }

  private initLogin(connection: HubConnection) {
    connection.on("Notification", (notification: NotificationDto) => {
      this.notificationService.newNotification(notification);
    })
  }
}
