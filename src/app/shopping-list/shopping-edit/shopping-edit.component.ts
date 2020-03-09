import { Component, OnInit,ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppinglistService } from '../shoppinglist.service';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Params } from '@angular/router';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('f') form: NgForm
  editMode : boolean = false;

  @Output()  OnAddIngredientsCreted: Subject<Ingredient>;
  editIngre: Ingredient;
  selectedIndex: number;

  constructor(private shoppingListService : ShoppinglistService) { }

  ngOnInit() {

    this.shoppingListService.selectedIngr.subscribe((params : number) => {

      this.editIngre = this.shoppingListService.getIngredient(params);
      this.form.setValue({name: this.editIngre.name, amount: this.editIngre.amount});
      this.selectedIndex = +params;
      this.editMode = true;
            
    });
    
  }

  ClearForm(){
    this.form.reset();
    this.editMode = false;
  }

  DeleteIngr(){
    this.shoppingListService.deleteIngr(this.selectedIndex);
    this.ClearForm();
  }

  onSubmit(){
    const nameInput = this.form.value.name;
    const amountInput = this.form.value.amount;

    const addedOrEditedIngredient = { name : nameInput, amount : amountInput};
    if(this.editMode)
    {
      this.shoppingListService.editIngr(this.selectedIndex, addedOrEditedIngredient);

    }
    else{ 
      this.shoppingListService.createIng(addedOrEditedIngredient);
    }
      

  }

}
