import { FilmServiceService } from 'src/app/services/film-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-single-film',
  templateUrl: './single-film.component.html',
  styleUrls: ['./single-film.component.scss'],
})
export class SingleFilmComponent implements OnInit {
  id: any;
  film: any;
  constructor(
    private route: ActivatedRouteSnapshot,
    private filmService: FilmServiceService
  ) {}

  ngOnInit(): void {
    this.id = this.route.paramMap.get('id');
    console.log(this.id);
  }
}
