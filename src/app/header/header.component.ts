import { Component, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
@Output() moduleName: EventEmitter<string> = new EventEmitter();

  Loadmodule(moduleName: string){
    
    this.moduleName.emit(moduleName);
  }
}


