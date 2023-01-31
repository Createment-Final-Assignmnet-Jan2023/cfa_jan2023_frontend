import { Component, Input } from '@angular/core';
import { Pokemon } from '../shared/pokemon/pokemon';
import { PokemonService } from '../shared/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  providers: [PokemonService],
  styleUrls: ['./pokemonlist.component.css'],
})
export class PokemonlistComponent {
  pokemonList: Pokemon[] = [];
  constructor(private pokemonservice: PokemonService) {}

  selectedPokemon: Pokemon[] = [];

  addPokemon(pokemon: Pokemon) {
    this.selectedPokemon.push(pokemon);
    console.log(this.selectedPokemon);
  }
  removePokemon(pokemon: Pokemon) {
    this.selectedPokemon = this.selectedPokemon.filter(
      (oldPokemon) => oldPokemon !== pokemon
    );
  }

  saveTeam() {
    this.pokemonservice
      .createTeam(this.selectedPokemon)
      .subscribe((result) => (this.selectedPokemon = []));
    console.log('saved');
  }

  pageNumber: number = 0;
  nextPage() {
    this.pageNumber++;
    this.pokemonservice
      .getPokemon({ size: 14, page: this.pageNumber })
      .subscribe((page: any) => {
        this.pokemonList = page.content;
      });
  }
  previousPage() {
    this.pageNumber--;
    this.pokemonservice
      .getPokemon({ size: 14, page: this.pageNumber })
      .subscribe((page: any) => {
        this.pokemonList = page.content;
      });
  }

  ngOnInit() {
    this.pokemonservice
      .getPokemon({ size: 14, page: this.pageNumber })
      .subscribe((page: any) => {
        this.pokemonList = page.content;
      });
  }
}
