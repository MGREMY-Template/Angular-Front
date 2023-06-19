import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserLoginDtoArrayResult } from '../../models/api/userLoginDtoArrayResult';
import { UserLoginDtoResult } from '../../models/api/userLoginDtoResult';
import { Configuration } from '../../configuration';
import { CustomHttpUrlEncodingCodec } from '../../encoder';

import Settings from '../../../../assets/settings.json';

@Injectable({
  providedIn: "root"
})
export class UserLoginService {
  protected basePath: string = Settings.API_URL;
  protected defaultHeaders = new HttpHeaders();

  constructor(protected httpClient: HttpClient, protected configuration: Configuration) { }

  public apiIdentityUserLoginGetAllGet(observe?: 'body', reportProgress?: boolean): Observable<UserLoginDtoArrayResult>;
  public apiIdentityUserLoginGetAllGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserLoginDtoArrayResult>>;
  public apiIdentityUserLoginGetAllGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserLoginDtoArrayResult>>;
  public apiIdentityUserLoginGetAllGet(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.request<UserLoginDtoArrayResult>('get', `${this.basePath}/api/Identity/UserLogin/GetAll`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public apiIdentityUserLoginGetByIdGet(loginProvider: string, providerKey: string, observe?: 'body', reportProgress?: boolean): Observable<UserLoginDtoResult>;
  public apiIdentityUserLoginGetByIdGet(loginProvider: string, providerKey: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserLoginDtoResult>>;
  public apiIdentityUserLoginGetByIdGet(loginProvider: string, providerKey: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserLoginDtoResult>>;
  public apiIdentityUserLoginGetByIdGet(loginProvider: string, providerKey: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });

    if (loginProvider !== undefined && loginProvider !== null) {
      queryParameters = queryParameters.set('LoginProvider', <any>loginProvider);
    }
    if (providerKey !== undefined && providerKey !== null) {
      queryParameters = queryParameters.set('ProviderKey', <any>providerKey);
    }

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.request<UserLoginDtoResult>('get', `${this.basePath}/api/Identity/UserLogin/GetById`,
      {
        params: queryParameters,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public apiIdentityUserLoginGetListGet(take?: number, skip?: number, orderBy?: string, isOrderByDescending?: boolean, observe?: 'body', reportProgress?: boolean): Observable<UserLoginDtoArrayResult>;
  public apiIdentityUserLoginGetListGet(take?: number, skip?: number, orderBy?: string, isOrderByDescending?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserLoginDtoArrayResult>>;
  public apiIdentityUserLoginGetListGet(take?: number, skip?: number, orderBy?: string, isOrderByDescending?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserLoginDtoArrayResult>>;
  public apiIdentityUserLoginGetListGet(take?: number, skip?: number, orderBy?: string, isOrderByDescending?: boolean, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
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

    return this.httpClient.request<UserLoginDtoArrayResult>('get', `${this.basePath}/api/Identity/UserLogin/GetList`,
      {
        params: queryParameters,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public apiIdentityUserLoginCountGet(observe?: 'body', reportProgress?: boolean): Observable<number>;
  public apiIdentityUserLoginCountGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
  public apiIdentityUserLoginCountGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
  public apiIdentityUserLoginCountGet(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.request<number>('get', `${this.basePath}/api/Identity/UserLogin/Count`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

}
