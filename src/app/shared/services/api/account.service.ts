import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GetClaimsOutputResult } from '../../models/api/getClaimsOutputResult';
import { GetRolesOutputResult } from '../../models/api/getRolesOutputResult';
import { Configuration } from '../../configuration';

import Settings from '../../../../assets/settings.json';

@Injectable({
  providedIn: "root"
})
export class AccountService {
  protected basePath: string = Settings.API_URL;
  protected defaultHeaders = new HttpHeaders();

  constructor(protected httpClient: HttpClient, protected configuration: Configuration) { }

  public apiAccountGetClaimsGet(observe?: 'body', reportProgress?: boolean): Observable<GetClaimsOutputResult>;
  public apiAccountGetClaimsGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetClaimsOutputResult>>;
  public apiAccountGetClaimsGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetClaimsOutputResult>>;
  public apiAccountGetClaimsGet(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.request<GetClaimsOutputResult>('get', `${this.basePath}/api/Account/GetClaims`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public apiAccountGetRolesGet(observe?: 'body', reportProgress?: boolean): Observable<GetRolesOutputResult>;
  public apiAccountGetRolesGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetRolesOutputResult>>;
  public apiAccountGetRolesGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetRolesOutputResult>>;
  public apiAccountGetRolesGet(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.request<GetRolesOutputResult>('get', `${this.basePath}/api/Account/GetRoles`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

}
