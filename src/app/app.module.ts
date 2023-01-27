import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './shared/pokemon/pokemon.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TypesComponent } from './shared/types/types.component';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';
import { SelectedPokemonComponent } from './shared/selectedPokemon/selectedPokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    NavbarComponent,
    TypesComponent,
    PokemonlistComponent,
    SelectedPokemonComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
