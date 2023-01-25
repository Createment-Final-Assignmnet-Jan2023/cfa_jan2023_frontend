import { Call } from '@angular/compiler';
import { Component, Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon',
  providers: [PokemonService],
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})



export class PokemonComponent {
  constructor(private pokemonservice: PokemonService){}
    
  ngOnInit(){
    this.pokemonservice.getPokemon().subscribe((pokemon: Pokemon[]) => console.log(pokemon));

    
  }
  

}
