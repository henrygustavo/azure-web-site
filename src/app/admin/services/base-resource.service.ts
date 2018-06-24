import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export abstract class BaseResourceService<T> {

  public baseUrl = '';

  constructor(private _http: HttpClient, private _url: string) {

    this.baseUrl = environment.apiUrl;
  }

  public getAll(): Observable<T[]> {

    let entity$ = this._http.get(`${this.baseUrl}${this._url}`)
      .map((response: any) => <T[]>response)
      .catch((error: any) => Observable.throw(error || 'Server error'));
    return entity$;
  }

  public get(id: string): Observable<T> {

    let entity$ = this._http.get(`${this.baseUrl}${this._url}/${id}`)
      .map((response: any) => <T>response)
      .catch((error: any) => Observable.throw(error || 'Server error'));
    return entity$;
  }

  uploadImage(formData: FormData): Observable<any> {

    const headers = new HttpHeaders({ 'Is-File': 'true'}); // check JsonInterceptorService

    return this._http.post(`${this.baseUrl}${this._url}`, formData, { headers: headers })
        .map((response: any) => response)
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }
}
