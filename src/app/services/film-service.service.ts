import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilmServiceService {
  constructor(private _http: HttpClient) {}
  getManyFilms(name: string) {
    const apiURL = 'https://api.tvmaze.com/search/shows?q=';
    const request = `${apiURL}${name}`;
    return this._http.get(request);
  }
}
