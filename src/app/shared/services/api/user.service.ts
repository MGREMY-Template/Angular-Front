import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Configuration } from '../../configuration';
import { CustomHttpUrlEncodingCodec } from '../../encoder';

import { Result } from '../../models/api/result';
import { UserDto } from '../../models/api/userDto';

import Settings from '../../../../assets/settings.json';

@Injectable({
  providedIn: "root"
})
export class UserService {
  protected basePath: string = Settings.API_URL;
  protected defaultHeaders = new HttpHeaders();

  constructor(protected httpClient: HttpClient, protected configuration: Configuration) { }

  public GetAll(observe?: 'body', reportProgress?: boolean): Observable<Result<UserDto[]>>;
  public GetAll(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Result<UserDto[]>>>;
  public GetAll(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Result<UserDto[]>>>;
  public GetAll(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.request<Result<UserDto[]>>('get', `${this.basePath}/api/Identity/User/GetAll`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public GetById(id: string, observe?: 'body', reportProgress?: boolean): Observable<Result<UserDto>>;
  public GetById(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Result<UserDto>>>;
  public GetById(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Result<UserDto>>>;
  public GetById(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });

    if (id !== undefined && id !== null) {
      queryParameters = queryParameters.set('Id', <any>id);
    }

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.request<Result<UserDto>>('get', `${this.basePath}/api/Identity/User/GetById`,
      {
        params: queryParameters,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public GetList(take?: number, skip?: number, orderBy?: string, isOrderByDescending?: boolean, observe?: 'body', reportProgress?: boolean): Observable<Result<UserDto[]>>;
  public GetList(take?: number, skip?: number, orderBy?: string, isOrderByDescending?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Result<UserDto[]>>>;
  public GetList(take?: number, skip?: number, orderBy?: string, isOrderByDescending?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Result<UserDto[]>>>;
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

    return this.httpClient.request<Result<UserDto[]>>('get', `${this.basePath}/api/Identity/User/GetList`,
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

    return this.httpClient.request<number>('get', `${this.basePath}/api/Identity/User/Count`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

}
