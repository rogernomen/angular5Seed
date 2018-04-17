import {HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

export abstract class AuthHttp {

  abstract get<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T>;

  abstract post<T>(url: string, body: any | null, params?: HttpParams, headers?: HttpHeaders): Observable<T>;

  abstract put<T>(url: string, body: any | null, headers?: HttpHeaders): Observable<T>;

  abstract delete<T>(url: string, headers?: HttpHeaders): Observable<T>;

  abstract patch<T>(url: string, body: any | null, headers?: HttpHeaders): Observable<T>;

}
