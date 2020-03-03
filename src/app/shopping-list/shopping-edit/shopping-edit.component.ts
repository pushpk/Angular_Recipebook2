import { Component, OnInit,ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppinglistService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name') nameInputRef: ElementRef
  @ViewChild('amount') amountInputRef: ElementRef
  @Output()  OnAddIngredientsCreted: EventEmitter<Ingredient> = new EventEmitter();

  constructor(private shoppingListService : ShoppinglistService) { }

  ngOnInit() {
  }

  OnAddIngredients(){

    const nameInput = this.nameInputRef.nativeElement.value;
    const amountInput = this.amountInputRef.nativeElement.value;

      this.shoppingListService.createIng({ name : nameInput, amount : amountInput});
      

  }

}
