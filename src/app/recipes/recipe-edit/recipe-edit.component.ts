import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean;
  recipeForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.recipeForm = new FormGroup({
      name : new FormControl(''), 
      imageurl : new FormControl(''),
      description : new  FormControl('')
    });

    this.activatedRoute.params.subscribe((params : Params) => {

      this.id = +params['id'];
      this.editMode = params['id'] != null;

    });

  }

  ClearForm(){

  }

  onSubmit(){

    console.log(this.recipeForm);
  }

}
