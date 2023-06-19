import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RoleClaimDtoArrayResult } from '../../models/api/roleClaimDtoArrayResult';
import { RoleClaimDtoResult } from '../../models/api/roleClaimDtoResult';
import { Configuration } from '../../configuration';
import { CustomHttpUrlEncodingCodec } from '../../encoder';

import Settings from '../../../../assets/settings.json';

@Injectable({
  providedIn: "root"
})
export class RoleClaimService {
  protected basePath: string = Settings.API_URL;
  protected defaultHeaders = new HttpHeaders();

  constructor(protected httpClient: HttpClient, protected configuration: Configuration) { }

  public apiIdentityRoleClaimGetAllGet(observe?: 'body', reportProgress?: boolean): Observable<RoleClaimDtoArrayResult>;
  public apiIdentityRoleClaimGetAllGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RoleClaimDtoArrayResult>>;
  public apiIdentityRoleClaimGetAllGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RoleClaimDtoArrayResult>>;
  public apiIdentityRoleClaimGetAllGet(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.request<RoleClaimDtoArrayResult>('get', `${this.basePath}/api/Identity/RoleClaim/GetAll`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public apiIdentityRoleClaimGetByIdGet(id: number, observe?: 'body', reportProgress?: boolean): Observable<RoleClaimDtoResult>;
  public apiIdentityRoleClaimGetByIdGet(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RoleClaimDtoResult>>;
  public apiIdentityRoleClaimGetByIdGet(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RoleClaimDtoResult>>;
  public apiIdentityRoleClaimGetByIdGet(id: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });

    if (id !== undefined && id !== null) {
      queryParameters = queryParameters.set('Id', <any>id);
    }

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.request<RoleClaimDtoResult>('get', `${this.basePath}/api/Identity/RoleClaim/GetById`,
      {
        params: queryParameters,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public apiIdentityRoleClaimGetListGet(take?: number, skip?: number, orderBy?: string, isOrderByDescending?: boolean, observe?: 'body', reportProgress?: boolean): Observable<RoleClaimDtoArrayResult>;
  public apiIdentityRoleClaimGetListGet(take?: number, skip?: number, orderBy?: string, isOrderByDescending?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RoleClaimDtoArrayResult>>;
  public apiIdentityRoleClaimGetListGet(take?: number, skip?: number, orderBy?: string, isOrderByDescending?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RoleClaimDtoArrayResult>>;
  public apiIdentityRoleClaimGetListGet(take?: number, skip?: number, orderBy?: string, isOrderByDescending?: boolean, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
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

    return this.httpClient.request<RoleClaimDtoArrayResult>('get', `${this.basePath}/api/Identity/RoleClaim/GetList`,
      {
        params: queryParameters,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public apiIdentityRoleClaimCountGet(observe?: 'body', reportProgress?: boolean): Observable<number>;
  public apiIdentityRoleClaimCountGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
  public apiIdentityRoleClaimCountGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
  public apiIdentityRoleClaimCountGet(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.request<number>('get', `${this.basePath}/api/Identity/RoleClaim/Count`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

}
