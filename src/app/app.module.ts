import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './shared/pokemon/pokemon.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TypesComponent } from './shared/types/types.component';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    NavbarComponent,
    TypesComponent,
    PokemonlistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent
  ]
})
export class AppModule { 

}
