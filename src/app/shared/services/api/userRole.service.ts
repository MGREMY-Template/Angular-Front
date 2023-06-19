import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserRoleDtoArrayResult } from '../../models/api/userRoleDtoArrayResult';
import { UserRoleDtoResult } from '../../models/api/userRoleDtoResult';
import { Configuration } from '../../configuration';
import { CustomHttpUrlEncodingCodec } from '../../encoder';

import Settings from '../../../../assets/settings.json';

@Injectable({
  providedIn: "root"
})
export class UserRoleService {
  protected basePath: string = Settings.API_URL;
  protected defaultHeaders = new HttpHeaders();

  constructor(protected httpClient: HttpClient, protected configuration: Configuration) { }

  public apiIdentityUserRoleGetAllGet(observe?: 'body', reportProgress?: boolean): Observable<UserRoleDtoArrayResult>;
  public apiIdentityUserRoleGetAllGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserRoleDtoArrayResult>>;
  public apiIdentityUserRoleGetAllGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserRoleDtoArrayResult>>;
  public apiIdentityUserRoleGetAllGet(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.request<UserRoleDtoArrayResult>('get', `${this.basePath}/api/Identity/UserRole/GetAll`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public apiIdentityUserRoleGetByIdGet(userId: string, roleId: string, observe?: 'body', reportProgress?: boolean): Observable<UserRoleDtoResult>;
  public apiIdentityUserRoleGetByIdGet(userId: string, roleId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserRoleDtoResult>>;
  public apiIdentityUserRoleGetByIdGet(userId: string, roleId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserRoleDtoResult>>;
  public apiIdentityUserRoleGetByIdGet(userId: string, roleId: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });

    if (userId !== undefined && userId !== null) {
      queryParameters = queryParameters.set('UserId', <any>userId);
    }
    if (roleId !== undefined && roleId !== null) {
      queryParameters = queryParameters.set('RoleId', <any>roleId);
    }

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.request<UserRoleDtoResult>('get', `${this.basePath}/api/Identity/UserRole/GetById`,
      {
        params: queryParameters,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public apiIdentityUserRoleGetListGet(take?: number, skip?: number, orderBy?: string, isOrderByDescending?: boolean, observe?: 'body', reportProgress?: boolean): Observable<UserRoleDtoArrayResult>;
  public apiIdentityUserRoleGetListGet(take?: number, skip?: number, orderBy?: string, isOrderByDescending?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserRoleDtoArrayResult>>;
  public apiIdentityUserRoleGetListGet(take?: number, skip?: number, orderBy?: string, isOrderByDescending?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserRoleDtoArrayResult>>;
  public apiIdentityUserRoleGetListGet(take?: number, skip?: number, orderBy?: string, isOrderByDescending?: boolean, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });

    if (take !== undefined && take !== null) {
      queryParameters = queryParameters.set('Take', <any>take);
    }
    if (skip !== undefined && skip !== null) {
      queryParameters = queryParameters.set('Skip', <any>skip);
    }
    if (orderBy !== undefined && orderBy !== null) {
      queryParameters = queryParameters.set('OrderBy', <any>orderBy);
    }
    if (isOrderByDescending !== undefined && isOrderByDescending !== null) {
      queryParameters = queryParameters.set('IsOrderByDescending', <any>isOrderByDescending);
    }

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.request<UserRoleDtoArrayResult>('get', `${this.basePath}/api/Identity/UserRole/GetList`,
      {
        params: queryParameters,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public apiIdentityUserRoleCountGet(observe?: 'body', reportProgress?: boolean): Observable<number>;
  public apiIdentityUserRoleCountGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
  public apiIdentityUserRoleCountGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
  public apiIdentityUserRoleCountGet(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.request<number>('get', `${this.basePath}/api/Identity/UserRole/Count`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

}
