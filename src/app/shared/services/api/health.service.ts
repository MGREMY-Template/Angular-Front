import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Configuration } from '../../configuration';

import Settings from '../../../../assets/settings.json';

@Injectable({
  providedIn: "root"
})
export class HealthService {
  protected basePath: string = Settings.API_URL;
  protected defaultHeaders = new HttpHeaders();

  constructor(protected httpClient: HttpClient, protected configuration: Configuration) { }

  public Ping(observe?: 'body', reportProgress?: boolean): Observable<any>;
  public Ping(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
  public Ping(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
  public Ping(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept([]);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.request<any>('get', `${this.basePath}/Health/Ping`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

}
