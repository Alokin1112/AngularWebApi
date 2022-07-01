import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/shared/shared.module';
import { FilmWrapperModule } from '../film-wrapper/film-wrapper.module';
import { SearchModule } from '../search/search.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FilmWrapperModule,
    SearchModule,
  ],
})
export class HomeModule {}
