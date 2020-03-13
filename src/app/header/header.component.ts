import { Component, Output,EventEmitter, OnInit } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/datastorage.services';
import { AuthService } from '../auth/authservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  isloggedIn : boolean = false;
  constructor(private dataStorageService : DataStorageService, private authService : AuthService, private router : Router){

  }
@Output() moduleName: EventEmitter<string> = new EventEmitter();

  Loadmodule(moduleName: string){
    
    this.moduleName.emit(moduleName);
  }

  ngOnInit(){

    this.isloggedIn = this.authService.isUsedLoggedIn();

    this.authService.signedUpOrLoginSuccess.subscribe((signedUpOrLoginToken  :string) => {

      this.isloggedIn = true;
  });

  this.authService.isLogoutSuccess.subscribe((isLogOutDone : boolean) => this.isloggedIn  = false)

  }

  saveData(){
      this.dataStorageService.postDataToServer();
  }

  fetchData(){

    this.dataStorageService.getDataFromServer();
  }

  logout(){

    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}


