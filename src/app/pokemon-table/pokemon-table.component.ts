import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';;


@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.css']
})
export class PokemonTableComponent {
  pokemons: any[] = [];
  
  searchText:string
  selectedPokemon: any = null;
  filteredPokemons: any[] = [];
  p: number = 1 
  nextUrl: string | null = null;
  previousUrl: string | null = null; 


  currentPage: number = 1; 



  constructor(private http: HttpClient) {
    this.getPokemons(); 

  }



  getPokemons(url: string | null = null) {

    const apiUrl = url || 'https://pokeapi.co/api/v2/pokemon'; 
    this.http.get(apiUrl)
    .subscribe((data: any) => {
      this.pokemons = data.results;
      this.filteredPokemons = this.pokemons; 
      this.nextUrl = data.next; 
      this.previousUrl = data.previous;
     
    });
    
  }

  searchPokemon(){ 
   
      this.filteredPokemons = this.pokemons.filter(pokemon => pokemon.name.includes(this.searchText));
      console.log(this.filteredPokemons);
      
  }
  

  showPokemonDetails(url: string) {
    this.http.get(url)
      .subscribe((data: any) => {
        this.selectedPokemon = data; 

      });
  }

  loadNextPage() {
    if (this.nextUrl) {
      this.getPokemons(this.nextUrl); 
      this.currentPage++
    }
  }
  
  loadPreviousPage() {
    if (this.previousUrl) {
      this.getPokemons(this.previousUrl); 
      this.currentPage--
    }
  } 




alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

countPokemonsByLetter(letter: string): number { 
  const lowercaseLetter = letter.toLowerCase();
  return this.filteredPokemons.filter(pokemon => pokemon.name.toLowerCase().startsWith(lowercaseLetter)).length;
} 




getPokemonTypeClasses(pokemon: any): string {
  
  const typeClasses = pokemon && pokemon.types.length > 0 ? pokemon.types[0].type.name : ''; 
  
  return `card ${typeClasses}-type`;
} 


getPokemonTypeList(pokemon: any): string {
  
  const typeClasses = pokemon && pokemon.types.length > 0 ? pokemon.types[0].type.name : ''; 

  return `card ${typeClasses}-type`;
}

getPokemonTypes(pokemon: any): string {

  return pokemon.types.map(type => type.type.name).join(', ');
}


isNormalType(): boolean {
  return this.selectedPokemon.types[0].type.name.toLowerCase() === 'normal';
}
  
}
