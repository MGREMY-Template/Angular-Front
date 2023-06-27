import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Result } from '../../models/api/result';
import { Configuration } from '../../configuration';

import { GetClaimsOutput } from '../../models/api/getClaimsOutput';
import { GetRolesOutput } from '../../models/api/getRolesOutput';

import Settings from '../../../../assets/settings.json';

@Injectable({
  providedIn: "root"
})
export class AccountService {
  protected basePath: string = Settings.API_URL;
  protected defaultHeaders = new HttpHeaders();

  constructor(protected httpClient: HttpClient, protected configuration: Configuration) { }

  public GetClaims(observe?: 'body', reportProgress?: boolean): Observable<Result<GetClaimsOutput>>;
  public GetClaims(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Result<GetClaimsOutput>>>;
  public GetClaims(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Result<GetClaimsOutput>>>;
  public GetClaims(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.request<Result<GetClaimsOutput>>('get', `${this.basePath}/api/Account/GetClaims`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public GetRoles(observe?: 'body', reportProgress?: boolean): Observable<Result<GetRolesOutput>>;
  public GetRoles(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Result<GetRolesOutput>>>;
  public GetRoles(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Result<GetRolesOutput>>>;
  public GetRoles(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.request<Result<GetRolesOutput>>('get', `${this.basePath}/api/Account/GetRoles`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }
}
