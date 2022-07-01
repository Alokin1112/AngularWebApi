import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleFilmComponent } from './single-film.component';

const routes: Routes = [{ path: '', component: SingleFilmComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleFilmRoutingModule {}
