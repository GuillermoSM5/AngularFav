import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Personaje {
  id?: string;
  name?: string;
  image?: string;
  species?: string;
  status?: string;
}

@Injectable({
  providedIn: 'root',
})
export class Ejemplo1Service {
  private favoritos: Personaje[] = [];
  private _personaje: Personaje = { id: '' };
  constructor(private http: HttpClient) {
    this.favoritos = JSON.parse(localStorage.getItem('favoritos')!) || [];
  }

  get getPersonajes(): Personaje[] {
    return this.favoritos;
  }

  get getPersonaje(): Personaje {
    return this._personaje;
  }

  llamada(termino: string): void {
    this.http
      .get(`https://rickandmortyapi.com/api/character/${termino}`)
      .subscribe((res: Personaje) => {
        this._personaje = res;
      });
  }

  addFavorite(personaje: Personaje): void {
    this.favoritos.push(personaje);
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
  }

  delete(personaje: Personaje): void {
    this.favoritos = this.favoritos.filter((pe) => pe.name !== personaje.name);
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
  }
}
