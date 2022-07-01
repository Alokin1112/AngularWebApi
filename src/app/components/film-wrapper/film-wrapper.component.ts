import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'film-wrapper',
  templateUrl: './film-wrapper.component.html',
  styleUrls: ['./film-wrapper.component.scss'],
})
export class FilmWrapperComponent implements OnInit {
  constructor() {}
  @Input() films: any;
  ngOnInit(): void {}
  getMaxSummaryLength() {
    const summariesLenght = this.films.map(
      (film: any) => [...film.summary].length
    );
    return Math.min(...summariesLenght);
  }
}
