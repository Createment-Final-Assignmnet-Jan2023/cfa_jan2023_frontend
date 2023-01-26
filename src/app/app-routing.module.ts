import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BattleComponent } from './battle/battle.component';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';

const routes: Routes = [ {
  path:'', 
  component: PokemonlistComponent
},
{
  path: 'battle', 
  component: BattleComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
