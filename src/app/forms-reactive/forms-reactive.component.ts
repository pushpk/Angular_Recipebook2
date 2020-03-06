import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-reactive',
  templateUrl: './forms-reactive.component.html',
  styleUrls: ['./forms-reactive.component.css']
})
export class FormsReactiveComponent implements OnInit {


    signupform = new FormGroup({
      Username : new FormControl('pushpak', Validators.required),
      Email : new FormControl(''),
      selectList : new FormControl('')

    });


  ngOnInit() {
  }

  onSubmit(){

    console.log(this.signupform.value);

  }

}
