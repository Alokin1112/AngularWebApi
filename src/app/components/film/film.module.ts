import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmRoutingModule } from './film-routing.module';
import { FilmComponent } from './film.component';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [FilmComponent],
  imports: [SharedModule, CommonModule, FilmRoutingModule],
  exports: [FilmComponent],
})
export class FilmModule {}
