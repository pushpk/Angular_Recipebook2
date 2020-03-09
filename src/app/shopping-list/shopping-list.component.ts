import { Component, OnInit, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from './shoppinglist.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  

 

  constructor(private shoppingListService: ShoppinglistService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
        this.shoppingListService.ingredientAdded.subscribe((ingr : Ingredient[]) => this.ingredients = ingr);
  }
  

  onEdit(index : number)
  {
   this.shoppingListService.onStartEdit(index);
    

  }
}
