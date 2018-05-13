import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  artista: any = {};
  tracks: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    public spotifyService: SpotifyService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.id);

      this.spotifyService.getArtista(params.id)
        .subscribe(artista => {
          this.artista = artista;
          console.log(this.artista);
        });

      this.spotifyService.getTop(params.id)
        .subscribe(tracks => {
          this.tracks = tracks;
          console.log(this.tracks);
        });
    });
  }

}
