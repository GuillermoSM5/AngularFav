import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjemploComponent } from './ejemplo.component';
import { FormsModule } from '@angular/forms';
import { FavoriteBarComponent } from './favorite-bar/favorite-bar.component';

@NgModule({
  declarations: [EjemploComponent, FavoriteBarComponent],
  exports: [EjemploComponent, FavoriteBarComponent],
  imports: [CommonModule, FormsModule],
})
export class EjemploModule {}
