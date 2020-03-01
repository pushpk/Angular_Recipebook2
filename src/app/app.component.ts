import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadModuleName : string = 'recipe';

  loadModule(name: string){
    this.loadModuleName = name;
  }
}
