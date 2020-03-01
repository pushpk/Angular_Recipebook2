import { Component, OnInit,ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name') nameInputRef: ElementRef
  @ViewChild('amount') amountInputRef: ElementRef
  @Output()  OnAddIngredientsCreted: EventEmitter<Ingredient> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  OnAddIngredients(){

    const nameInput = this.nameInputRef.nativeElement.value;
    const amountInput = this.amountInputRef.nativeElement.value;

      this.OnAddIngredientsCreted.emit({ name : nameInput, amount : amountInput})

  }

}
