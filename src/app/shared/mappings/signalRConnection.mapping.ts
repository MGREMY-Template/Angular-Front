import { HubConnection } from "@microsoft/signalr";

export class SignalRConnectionMapping<T> {
  private readonly _connections: Map<T, HubConnection[]> = new Map<T, HubConnection[]>();

  public count = this._connections.size;

  public add(key: T, connection: HubConnection): void {
    var connections = this._connections.get(key);

    if (!connections) {
      connections = [];
      this._connections.set(key, connections);
    }

    connections.push(connection);
  }

  public getConnections(key: T): HubConnection[] | undefined {
    return this._connections.get(key);
  }

  public getConnection(key: T, connectionId: string | null): HubConnection | undefined {
    if (connectionId == null) {
      return undefined;
    }

    return this.getConnections(key)?.find(x => x.connectionId == connectionId);
  }

  public remove(key: T, connection: HubConnection): void {
    var connections = this._connections.get(key);

    if (connections) {
      connections = connections.filter(x => x !== connection);

      if (connections.length == 0) {
        this._connections.delete(key);
      }
    }
  }
}
