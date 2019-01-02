import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: []
})
export class CardsComponent implements OnInit {

  @Input() items: any[] = []; // Crear redireccionamiento por medio de click event hacia la respectiva info

  constructor(private router: Router) { }

  goToInfo(item: any) {

    const idArtist = item.type === 'artist' ? item.id : item.artists[0].id;

    this.router.navigate(['artist', idArtist]);
  }

  ngOnInit() {
  }

}
