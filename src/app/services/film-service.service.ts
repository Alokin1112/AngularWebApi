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
  getSingleFilm(id: number) {
    const request = `https://api.tvmaze.com/shows/${id}`;
    return this._http.get(request);
  }
  getCast(id: number) {
    const request = `https://api.tvmaze.com/shows/${id}/cast`;
    return this._http.get(request);
  }
  getEpisodes(id: number) {
    const request: string = `https://api.tvmaze.com/shows/${id}/episodes`;
    return this._http.get(request);
  }
}
