import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Token } from '../classes/token';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) { }

  validateToken(): Observable<any> {

    let localToken: Token;

    if (localStorage.getItem('token')) {

      localToken = JSON.parse(localStorage.getItem('token'));
      const elapsedTimeSec = (Date.now() - localToken.start_date) / 1000;

      if (elapsedTimeSec < localToken.expired_in) {
        return of(localToken);
      }
    }

    return this.getToken();
  }

  getToken(): Observable<any> {
    const encodedCredentials = btoa(`${environment.client_id}:${environment.client_secret}`);
    const body = new HttpParams().set('grant_type', 'client_credentials');
    const headers = new HttpHeaders({ 'authorization': `Basic ${encodedCredentials}` });

    return this.http.post(environment.token_url, body, { headers });
  }
}
