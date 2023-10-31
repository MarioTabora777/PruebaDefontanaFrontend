import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonTableComponent } from './pokemon-table/pokemon-table.component';
import { PokemonMobileComponent } from './pokemon-mobile/pokemon-mobile.component';


const routes: Routes = [
{component: PokemonTableComponent , path : ''} , 
{component: PokemonMobileComponent , path : 'mobile'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] , 
  
})
export class AppRoutingModule { }
