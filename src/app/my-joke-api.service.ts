import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

/*
RxJS (Por sus siglas en Inglés, "Reactive Extensions for JavaScript") 
es una librería para programación reactiva usando obvservables que hacen 
más fácil la creación de código asincrono o basado en callbacks.
*/
import { Observable } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyJokeApiService {
  private apiUrl = "https://v2.jokeapi.dev/joke/Any";
  constructor(private http: HttpClient) { }

  getRandomJoke(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
}
