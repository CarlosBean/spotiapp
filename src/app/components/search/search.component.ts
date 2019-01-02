import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  termino = '';
  artists: any;
  loading: boolean;
  error: boolean;
  errorJson: any;

  constructor(public spotify: SpotifyService) { }

  buscarArtistas() {
    if (this.termino.length === 0) {
      return;
    }

    this.loading = true;
    this.spotify.getArtists(this.termino).subscribe(data => {
      this.loading = false;
      this.artists = data;
    }, err => {
      this.loading = false;
      this.error = true;
      this.errorJson = err.error.error;
    });
  }

}
