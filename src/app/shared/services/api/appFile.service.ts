import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

import { Result } from '../../models/api/result';
import { PostAppFileQuery } from "../../models/api/postAppFileQuery";

import { AppFileDto } from "../../models/api/appFileDto";

import { Configuration } from "../../configuration";
import { CustomHttpUrlEncodingCodec } from "../../encoder";

import Settings from '../../../../assets/settings.json';

@Injectable({
  providedIn: "root"
})
export class AppFileService {

  protected basePath = Settings.API_URL;
  public defaultHeaders = new HttpHeaders();

  constructor(protected httpClient: HttpClient, protected configuration: Configuration) { }

  public getAll(observe?: 'body', reportProgress?: boolean): Observable<Result<AppFileDto[]>>;
  public getAll(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Result<AppFileDto[]>>>;
  public getAll(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Result<AppFileDto[]>>>;
  public getAll(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.request<Result<AppFileDto[]>>('get', `${this.basePath}/api/Application/AppFile/GetAll`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public GetById(id: string, observe?: 'body', reportProgress?: boolean): Observable<Result<AppFileDto>>;
  public GetById(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Result<AppFileDto>>>;
  public GetById(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Result<AppFileDto>>>;
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

    return this.httpClient.request<Result<AppFileDto>>('get', `${this.basePath}/api/Application/AppFile/GetById`,
      {
        params: queryParameters,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public GetBytes(appFileId: string, observe?: 'body', reportProgress?: boolean): Observable<Result<string>>;
  public GetBytes(appFileId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Result<string>>>;
  public GetBytes(appFileId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Result<string>>>;
  public GetBytes(appFileId: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });

    if (appFileId !== undefined && appFileId !== null) {
      queryParameters = queryParameters.set('AppFileId', <any>appFileId);
    }

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.request<Result<string>>('get', `${this.basePath}/api/Application/AppFile/GetBytes`,
      {
        params: queryParameters,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public GetList(take?: number, skip?: number, orderBy?: string, isOrderByDescending?: boolean, observe?: 'body', reportProgress?: boolean): Observable<Result<AppFileDto[]>>;
  public GetList(take?: number, skip?: number, orderBy?: string, isOrderByDescending?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Result<AppFileDto[]>>>;
  public GetList(take?: number, skip?: number, orderBy?: string, isOrderByDescending?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Result<AppFileDto[]>>>;
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

    return this.httpClient.request<Result<AppFileDto[]>>('get', `${this.basePath}/api/Application/AppFile/GetList`,
      {
        params: queryParameters,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public Post(file?: Blob, observe?: 'body', reportProgress?: boolean): Observable<Result<AppFileDto>>;
  public Post(file?: Blob, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Result<AppFileDto>>>;
  public Post(file?: Blob, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Result<AppFileDto>>>;
  public Post(file?: Blob, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    let formParams: { append(param: string, value: any): void; };
    let convertFormParamsToString = false;

    formParams = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });

    if (file !== undefined) {
      formParams = formParams.append('File', <any>file) as any || formParams;
    }

    return this.httpClient.request<Result<AppFileDto>>('post', `${this.basePath}/api/Application/AppFile/Post`,
      {
        body: convertFormParamsToString ? formParams.toString() : formParams,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }
}
