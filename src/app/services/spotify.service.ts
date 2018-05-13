import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  // Se utiliza para obtener la info constantemente, si se hace en el componente la info se destruye.
  artistas: any[] = [];
  tracks: any[] = [];
  urlSpotify = 'https://api.spotify.com/v1/';
  token = 'BQCzVXN8i_1SdaKwPVrYOV-57JXrLLTDQkTqfQnJb_dWAqqIBCBMJ3F8h0TTm948thXq8yeY_FBXPXfpZcM';

  constructor(public http: HttpClient) {
    console.log('Servicio Spotify listo');
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });
  }

  getArtista(id: string) {
    const url = `${this.urlSpotify}artists/${id}`;

    const headers = this.getHeaders();

    return this.http.get(url, { headers });
  }

  getArtistas(termino: string) {
    const url = `${this.urlSpotify}search?query=${termino}&type=artist&limit=20`;

    const headers = this.getHeaders();

    return this.http.get(url, { headers })
      .map((response: any) => {
        this.artistas = response.artists.items;
        return this.artistas;
      });
  }

  getTop(id: string) {
    const url = `${this.urlSpotify}artists/${id}/top-tracks?country=SE`;

    const headers = this.getHeaders();

    return this.http.get(url, { headers })
      .map((response: any) => {
        this.tracks = response.tracks;
        return this.tracks;
      });
  }
}
