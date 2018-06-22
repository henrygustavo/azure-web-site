import { Response, Headers } from '@angular/http';
import { JwtHttp } from 'ng2-ui-auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { environment } from '../../../environments/environment';
import { JwtRequestOptionsArgs } from 'ng2-ui-auth/jwt-http.service';

export abstract class BaseResourceService<T> {

  public baseUrl = '';
  
  constructor(private _http: JwtHttp, private _url: string) {

    this.baseUrl = environment.apiUrl;
  }

  public getAll(): Observable<T[]> {

    let entity$ = this._http.get(`${this.baseUrl}${this._url}`)
      .map((response: Response) => <T[]>response.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
    return entity$;
  }

  uploadImage(formData: FormData): Observable<any> {

    return this._http.post(`${this.baseUrl}${this._url}`, formData)
        .map((response: any) => response.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }



}
