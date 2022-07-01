import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmWrapperRoutingModule } from './film-wrapper-routing.module';
import { FilmWrapperComponent } from './film-wrapper.component';
import { SharedModule } from 'src/shared/shared.module';
import { FilmModule } from '../film/film.module';

@NgModule({
  declarations: [FilmWrapperComponent],
  imports: [SharedModule, CommonModule, FilmWrapperRoutingModule, FilmModule],
  exports: [FilmWrapperComponent],
})
export class FilmWrapperModule {}
