import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Configuration } from '../../configuration';
import { CustomHttpUrlEncodingCodec } from '../../encoder';

import { Result } from '../../models/api/result';
import { UserTokenDto } from '../../models/api/userTokenDto';

import Settings from '../../../../assets/settings.json';

@Injectable({
  providedIn: "root"
})
export class UserTokenService {
  protected basePath: string = Settings.API_URL;
  protected defaultHeaders = new HttpHeaders();

  constructor(protected httpClient: HttpClient, protected configuration: Configuration) { }

  public GetAll(observe?: 'body', reportProgress?: boolean): Observable<Result<UserTokenDto[]>>;
  public GetAll(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Result<UserTokenDto[]>>>;
  public GetAll(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Result<UserTokenDto[]>>>;
  public GetAll(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.request<Result<UserTokenDto[]>>('get', `${this.basePath}/api/Identity/UserToken/GetAll`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public GetById(userId: string, loginProvider: string, name: string, observe?: 'body', reportProgress?: boolean): Observable<Result<UserTokenDto>>;
  public GetById(userId: string, loginProvider: string, name: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Result<UserTokenDto>>>;
  public GetById(userId: string, loginProvider: string, name: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Result<UserTokenDto>>>;
  public GetById(userId: string, loginProvider: string, name: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });

    if (userId !== undefined && userId !== null) {
      queryParameters = queryParameters.set('UserId', <any>userId);
    }
    if (loginProvider !== undefined && loginProvider !== null) {
      queryParameters = queryParameters.set('LoginProvider', <any>loginProvider);
    }
    if (name !== undefined && name !== null) {
      queryParameters = queryParameters.set('Name', <any>name);
    }

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.request<Result<UserTokenDto>>('get', `${this.basePath}/api/Identity/UserToken/GetById`,
      {
        params: queryParameters,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public GetList(take?: number, skip?: number, orderBy?: string, isOrderByDescending?: boolean, observe?: 'body', reportProgress?: boolean): Observable<Result<UserTokenDto[]>>;
  public GetList(take?: number, skip?: number, orderBy?: string, isOrderByDescending?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Result<UserTokenDto[]>>>;
  public GetList(take?: number, skip?: number, orderBy?: string, isOrderByDescending?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Result<UserTokenDto[]>>>;
  public GetList(take?: number, skip?: number, orderBy?: string, isOrderByDescending?: boolean, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
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

    return this.httpClient.request<Result<UserTokenDto[]>>('get', `${this.basePath}/api/Identity/UserToken/GetList`,
      {
        params: queryParameters,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public Count(observe?: 'body', reportProgress?: boolean): Observable<number>;
  public Count(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
  public Count(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
  public Count(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.request<number>('get', `${this.basePath}/api/Identity/UserToken/Count`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

}
