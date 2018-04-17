import {Inject, Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {AuthHttp} from "@app/core/auth/basic-auth-abstract.service";
import {Observable} from "rxjs/Observable";
import {BASIC_AUTH_CONFIG, BasicAuthConfig} from "@app/core/auth/basic-auth.config";

@Injectable()
export class BasicAuth extends AuthHttp {

  constructor(private httpClient: HttpClient, @Inject(BASIC_AUTH_CONFIG) private basicAuthConfig: BasicAuthConfig ) {
    super();
  }

  get<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.httpClient.get<T>(url, {headers: this.createHeaders(headers), params: params});
  }

  post<T>(url: string, body: any | any, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.httpClient.post<T>(url, body, {headers: this.createHeaders(headers), params: params});
  }

  delete<T>(url: string, headers?: HttpHeaders): Observable<T> {
    return this.httpClient.delete<T>(url, {headers: this.createHeaders(headers)});
  }

  patch<T>(url: string, body: any | any, headers?: HttpHeaders): Observable<T> {
    return this.httpClient.patch<T>(url, body, {headers: this.createHeaders(headers)});
  }

  put<T>(url: string, body: any | any, headers?: HttpHeaders): Observable<T> {
    return this.httpClient.put<T>(url, body, {headers: this.createHeaders(headers)});
  }

  private createHeaders(_headers?: HttpHeaders): HttpHeaders {
    const contentType = _headers ? (_headers.get(this.basicAuthConfig.CONTENT_TYPE_HEADER) || this.basicAuthConfig.CONTENT_TYPE_DEFAULT_VALUE) : this.basicAuthConfig.CONTENT_TYPE_DEFAULT_VALUE;
    const accept = _headers ? (_headers.get(this.basicAuthConfig.ACCEPT_HEADER) || this.basicAuthConfig.ACCEPT_DEFAULT_VALUE) : this.basicAuthConfig.ACCEPT_DEFAULT_VALUE;
    const headers = _headers || new HttpHeaders();

    return headers
      .set(this.basicAuthConfig.AUTHORIZATION_HEADER, `Basic`)
      .set(this.basicAuthConfig.CONTENT_TYPE_HEADER, contentType)
      .set(this.basicAuthConfig.ACCEPT_HEADER, accept);
  }
}
