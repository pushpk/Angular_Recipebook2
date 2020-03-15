import { Component, OnInit, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from './shoppinglist.service';
import { Subject, Observable } from 'rxjs';
import {Store} from '@ngrx/store'


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  
})
export class ShoppingListComponent implements OnInit {
  ingredients: Observable< {ingredients : Ingredient[]}>;
  

 

  constructor(private shoppingListService: ShoppinglistService, private store : Store<{shoppingList : {ingredients : Ingredient[]}}>) { }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
    // this.ingredients = this.shoppingListService.getIngredients();
    //     this.shoppingListService.ingredientAdded.subscribe((ingr : Ingredient[]) => this.ingredients = ingr);
  }
  

  onEdit(index : number)
  {
   this.shoppingListService.onStartEdit(index);
    

  }
}
