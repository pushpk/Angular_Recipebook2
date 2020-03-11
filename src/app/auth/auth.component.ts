import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  signUpMode: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form : NgForm){

    console.log(form.value);
  }
  switchToLogin(){

     this.signUpMode = !this.signUpMode;
  }

}
