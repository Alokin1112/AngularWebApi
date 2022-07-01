import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleFilmRoutingModule } from './single-film-routing.module';
import { SingleFilmComponent } from './single-film.component';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [SingleFilmComponent],
  imports: [CommonModule, SingleFilmRoutingModule, SharedModule],
  exports: [SingleFilmComponent],
})
export class SingleFilmModule {}
