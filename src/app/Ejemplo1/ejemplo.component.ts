import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Personaje, Ejemplo1Service } from './ejemplo1.service';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
})
export class EjemploComponent implements OnInit {
  termino: string = '';
  constructor(private es: Ejemplo1Service) {}

  get resultados() {
    return this.es.getPersonaje;
  }
  mostrar() {
    if (this.termino === '') return;

    this.es.llamada(this.termino);

    this.termino = '';
  }

  add() {
    this.es.addFavorite({
      id: this.resultados.id,
      name: this.resultados.name,
      image: this.resultados.image,
      species: this.resultados.species,
      status: this.resultados.status,
    });
  }

  ngOnInit(): void {}
}
