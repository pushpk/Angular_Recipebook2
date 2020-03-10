import { Component, Output,EventEmitter } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/datastorage.services';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dataStorageService : DataStorageService){

  }
@Output() moduleName: EventEmitter<string> = new EventEmitter();

  Loadmodule(moduleName: string){
    
    this.moduleName.emit(moduleName);
  }

  saveData(){
      this.dataStorageService.postDataToServer();
  }

  fetchData(){

    this.dataStorageService.getDataFromServer();
  }
}


