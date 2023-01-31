
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})



export class PokemonComponent implements OnInit {
  
  
  @Input() pokemon: any;
  ngOnInit(): void { 
  }
  @Output() addPokemonEvent = new EventEmitter<Pokemon>();
  @Output() removePokemonEvent = new EventEmitter<Pokemon>();

  addNewPokemon(value:Pokemon){
    this.addPokemonEvent.emit(value);
  }

  removeNewPokemon(value:Pokemon){
    this.removePokemonEvent.emit(value);
  }


  selectedPokemon: boolean = false;

  onSelect(pokemon: Pokemon): void {
  this.selectedPokemon = !this.selectedPokemon;
  if (this.selectedPokemon){
    this.addNewPokemon(pokemon)

  } else{
    this.removeNewPokemon(pokemon)
  }
  
}
  
  
  
  
  
  

}
