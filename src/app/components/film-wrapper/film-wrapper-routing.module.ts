import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmWrapperComponent } from './film-wrapper.component';

const routes: Routes = [{ path: '', component: FilmWrapperComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmWrapperRoutingModule { }
