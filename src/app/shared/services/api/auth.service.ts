import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Result } from '../../models/api/result';
import { ConfirmEmailQuery } from '../../models/api/confirmEmailQuery';
import { SignInQuery } from '../../models/api/signInQuery';
import { SignUpQuery } from '../../models/api/signUpQuery';

import { UserDto } from '../../models/api/userDto';
import { GetEmailConfirmationTokenOutput } from '../../models/api/getEmailConfirmationTokenOutput';
import { SignInOutput } from '../../models/api/signInOutput';

import { Configuration } from '../../configuration';
import { CustomHttpUrlEncodingCodec } from '../../encoder';

import Settings from '../../../../assets/settings.json';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  protected basePath: string = Settings.API_URL;
  protected defaultHeaders = new HttpHeaders();

  constructor(protected httpClient: HttpClient, protected configuration: Configuration) { }

  public apiAuthAuthConfirmEmailPost(body?: ConfirmEmailQuery, observe?: 'body', reportProgress?: boolean): Observable<Result<UserDto>>;
  public apiAuthAuthConfirmEmailPost(body?: ConfirmEmailQuery, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Result<UserDto>>>;
  public apiAuthAuthConfirmEmailPost(body?: ConfirmEmailQuery, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Result<UserDto>>>;
  public apiAuthAuthConfirmEmailPost(body?: ConfirmEmailQuery, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(['application/json']);

    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.request<Result<UserDto>>('post', `${this.basePath}/api/Auth/Auth/ConfirmEmail`,
      {
        body: body,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public apiAuthAuthGetEmailConfimationTokenGet(email: string, observe?: 'body', reportProgress?: boolean): Observable<Result<GetEmailConfirmationTokenOutput>>;
  public apiAuthAuthGetEmailConfimationTokenGet(email: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Result<GetEmailConfirmationTokenOutput>>>;
  public apiAuthAuthGetEmailConfimationTokenGet(email: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Result<GetEmailConfirmationTokenOutput>>>;
  public apiAuthAuthGetEmailConfimationTokenGet(email: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });

    if (email !== undefined && email !== null) {
      queryParameters = queryParameters.set('Email', <any>email);
    }

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.request<Result<GetEmailConfirmationTokenOutput>>('get', `${this.basePath}/api/Auth/Auth/GetEmailConfimationToken`,
      {
        params: queryParameters,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public apiAuthAuthSignInPost(body?: SignInQuery, observe?: 'body', reportProgress?: boolean): Observable<Result<SignInOutput>>;
  public apiAuthAuthSignInPost(body?: SignInQuery, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Result<SignInOutput>>>;
  public apiAuthAuthSignInPost(body?: SignInQuery, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Result<SignInOutput>>>;
  public apiAuthAuthSignInPost(body?: SignInQuery, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(['application/json']);

    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.request<Result<SignInOutput>>('post', `${this.basePath}/api/Auth/Auth/SignIn`,
      {
        body: body,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public apiAuthAuthSignUpPost(body?: SignUpQuery, observe?: 'body', reportProgress?: boolean): Observable<Result<UserDto>>;
  public apiAuthAuthSignUpPost(body?: SignUpQuery, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Result<UserDto>>>;
  public apiAuthAuthSignUpPost(body?: SignUpQuery, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Result<UserDto>>>;
  public apiAuthAuthSignUpPost(body?: SignUpQuery, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(['application/json']);

    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(['application/json']);

    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.request<Result<UserDto>>('post', `${this.basePath}/api/Auth/Auth/SignUp`,
      {
        body: body,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }
}
