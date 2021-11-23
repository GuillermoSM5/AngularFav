import { Component, OnInit } from '@angular/core';
import { Ejemplo1Service, Personaje } from '../ejemplo1.service';

@Component({
  selector: 'app-favorite-bar',
  templateUrl: './favorite-bar.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class FavoriteBarComponent implements OnInit {
  constructor(private se: Ejemplo1Service) {}

  get personajes() {
    return this.se.getPersonajes;
  }

  delete(personaje: Personaje) {
    this.se.delete(personaje);
  }

  buscar(result: Personaje) {
    this.se.llamada(`${result.id}`);
  }

  ngOnInit(): void {}
}
