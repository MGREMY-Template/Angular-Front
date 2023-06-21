import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Configuration } from '../../configuration';
import { CustomHttpUrlEncodingCodec } from '../../encoder';

import { Result } from '../../models/api/Result';
import { RoleDto } from '../../models/api/roleDto';

import Settings from '../../../../assets/settings.json';

@Injectable({
  providedIn: "root"
})
export class RoleService {
  protected basePath: string = Settings.API_URL;
  protected defaultHeaders = new HttpHeaders();

  constructor(protected httpClient: HttpClient, protected configuration: Configuration) { }

  public apiIdentityRoleGetAllGet(observe?: 'body', reportProgress?: boolean): Observable<Result<RoleDto[]>>;
  public apiIdentityRoleGetAllGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Result<RoleDto[]>>>;
  public apiIdentityRoleGetAllGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Result<RoleDto[]>>>;
  public apiIdentityRoleGetAllGet(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.request<Result<RoleDto[]>>('get', `${this.basePath}/api/Identity/Role/GetAll`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public apiIdentityRoleGetByIdGet(id: string, observe?: 'body', reportProgress?: boolean): Observable<Result<RoleDto>>;
  public apiIdentityRoleGetByIdGet(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Result<RoleDto>>>;
  public apiIdentityRoleGetByIdGet(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Result<RoleDto>>>;
  public apiIdentityRoleGetByIdGet(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });

    if (id !== undefined && id !== null) {
      queryParameters = queryParameters.set('Id', <any>id);
    }

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.request<Result<RoleDto>>('get', `${this.basePath}/api/Identity/Role/GetById`,
      {
        params: queryParameters,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public apiIdentityRoleGetListGet(take?: number, skip?: number, orderBy?: string, isOrderByDescending?: boolean, observe?: 'body', reportProgress?: boolean): Observable<Result<RoleDto[]>>;
  public apiIdentityRoleGetListGet(take?: number, skip?: number, orderBy?: string, isOrderByDescending?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Result<RoleDto[]>>>;
  public apiIdentityRoleGetListGet(take?: number, skip?: number, orderBy?: string, isOrderByDescending?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Result<RoleDto[]>>>;
  public apiIdentityRoleGetListGet(take?: number, skip?: number, orderBy?: string, isOrderByDescending?: boolean, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
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

    return this.httpClient.request<Result<RoleDto[]>>('get', `${this.basePath}/api/Identity/Role/GetList`,
      {
        params: queryParameters,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public apiIdentityRoleCountGet(observe?: 'body', reportProgress?: boolean): Observable<number>;
  public apiIdentityRoleCountGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
  public apiIdentityRoleCountGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
  public apiIdentityRoleCountGet(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.request<number>('get', `${this.basePath}/api/Identity/Role/Count`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

}
