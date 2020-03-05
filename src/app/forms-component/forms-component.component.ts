import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-forms-component',
  templateUrl: './forms-component.component.html',
  styleUrls: ['./forms-component.component.css']
})
export class FormsComponentComponent implements OnInit {

  @ViewChild('f') signupForm : NgForm
  defaultAns = "4"
  Genders = ['male','female'];
  constructor() { }

  ngOnInit() {
  }

  onSubmit()
  {
    console.log(this.signupForm);

  }
}
