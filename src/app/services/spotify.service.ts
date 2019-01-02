import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class SpotifyService {

  constructor(public http: HttpClient) { }

  getURL(uri: string): Observable<any> {
    const URL = environment.api_url + uri;
    // const headers = new HttpHeaders({ 'authorization': `Bearer ${Token.access_token}` });
    // console.log('HEADER', Token.access_token);
    // return this.http.get(URL, { headers });
    return this.http.get(URL);
  }

  getArtista(id: string): Observable<any> {
    return this.getURL(`/artists/${id}`)
      .pipe(map(res => res));
  }

  getArtists(termino: string): Observable<any> {
    return this.getURL(`/search?query=${termino}&type=artist&limit=15`)
      .pipe(map(res => res['artists'].items));
  }

  getNewReleases(): Observable<any> {
    return this.getURL('/browse/new-releases?offset=0&limit=6')
      .pipe(map(res => res['albums'].items));
  }

  getTop(id: string): Observable<any> {
    return this.getURL(`/artists/${id}/top-tracks?country=SE`)
      .pipe(map(res => res['tracks']));
  }
}
