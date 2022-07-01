import { Component, OnInit } from '@angular/core';
import { FilmServiceService } from 'src/app/services/film-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  films: Object;
  constructor(private _filmService: FilmServiceService) {}

  ngOnInit(): void {
    this.loadFilms();
  }

  loadFilms() {
    this._filmService.getManyFilms('Sherlock').subscribe((result: any) => {
      result = result.map((res: any) => res.show);
      this.films = result;
      console.log(result);
    });
  }
}
