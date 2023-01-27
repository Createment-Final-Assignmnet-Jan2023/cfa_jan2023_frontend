
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-selected-pokemon',
  templateUrl: './selectedPokemon.component.html',
  styleUrls: ['./selectedPokemon.component.css']
})



export class SelectedPokemonComponent implements OnInit {
  
  @Input() pokemon: any;
  ngOnInit(): void {
    
    
  }
 
  
  
  
  
  
  

}
