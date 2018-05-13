import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  termino = '';

  constructor(public spotifyService: SpotifyService) {
  }

  buscarArtistas() {
    if (this.termino.length === 0) {
      return;
    }
    this.spotifyService.getArtistas(this.termino).subscribe(response => {
      console.log(response);
    });
  }

}
