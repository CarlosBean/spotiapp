import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  tracks: any[] = [];
  loading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    public spotifyService: SpotifyService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.id);
      this.getArtist(params.id);
      this.getTop(params.id);
    });
  }

  getArtist(idArtist: string) {
    this.loading = true;
    this.spotifyService.getTop(idArtist).subscribe(data => {
      this.tracks = data;
      this.loading = false;
      console.log(this.tracks);
    });
  }

  getTop(idArtist: string) {
    this.loading = true;
    this.spotifyService.getArtista(idArtist).subscribe(data => {
      this.artist = data;
      this.loading = false;
      console.log(this.artist);
    });
  }

}
