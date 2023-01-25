import { Component, Input } from '@angular/core';
import { Pokemon } from '../shared/pokemon/pokemon';
import { PokemonService } from '../shared/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  providers: [PokemonService],
  styleUrls: ['./pokemonlist.component.css']
})
export class PokemonlistComponent {

  

  pokemonList: Pokemon[] = [];
  constructor(private pokemonservice: PokemonService){}
 

  ngOnInit(){
    this.pokemonservice.getPokemon().subscribe((pokemon: Pokemon[]) => this.pokemonList= pokemon);

    
  }
}
