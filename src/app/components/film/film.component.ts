import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
})
export class FilmComponent implements OnInit {
  constructor() {}
  @Input() film: any;
  @Input() maxSummaryLength: number;
  longSummary: boolean = false;
  tiltSettings = {
    max: 10,
  };
  ngOnInit(): void {}
  getSummary() {
    const regex = /<\/?[a-z]*>/g;
    const result = this.film?.summary.replace(regex, '');
    const resultWithDots =
      [...result].length > this.maxSummaryLength
        ? `${result.substring(0, this.maxSummaryLength)}...`
        : result;
    return this.longSummary ? result : resultWithDots;
  }
  changeSummaryLenght() {
    this.longSummary = !this.longSummary;
  }
  getImage() {
    const { image } = this.film;
    return image[Object.keys(image)[0]];
  }
}
