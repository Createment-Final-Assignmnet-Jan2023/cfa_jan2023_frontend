import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';





@Injectable()
export class PokemonService {
  pokeUrl= 'http://localhost:8080/pokemon';
  

  constructor(private http: HttpClient){}

/** GET Pokemon from the server */
getPokemon(params : any): Observable<any> {
  
  return this.http.get<any>(this.pokeUrl, { params})
    }
}