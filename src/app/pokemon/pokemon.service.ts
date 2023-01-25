import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pokemon } from './pokemon';


@Injectable()
export class PokemonService {
  pokeUrl= 'http://localhost:8080/pokemon';
  

  constructor(private http: HttpClient){}

/** GET heroes from the server */
getPokemon(): Observable<Pokemon[]> {
  return this.http.get<Pokemon[]>(this.pokeUrl)
    }
}