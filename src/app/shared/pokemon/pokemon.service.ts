import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pokemon } from './pokemon';
import { Page } from 'ngx-pagination/public-api';


@Injectable()
export class PokemonService {
  pokeUrl= 'http://localhost:8080/pokemon';
  teamUrl= 'http://localhost:8080/team';
  

  constructor(private http: HttpClient){}

/** GET Pokemon from the server */
  getPokemon(params : any): Observable<any> {
    return this.http.get<any>(this.pokeUrl, { params})
  }


    
  createTeam(team : Pokemon[]): Observable<any> {
    return this.http.post<any>(this.teamUrl, { teamMembers: team})
  }
}