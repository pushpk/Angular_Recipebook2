import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import {AuthService} from './authservice.service'
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  signUpMode: boolean = false;

  constructor(private authSer : AuthService) { }

  ngOnInit() {
  }

  onSubmit(form : NgForm){

    if(this.signUpMode)
    {
      this.authSer.signup(form.value.email,form.value.password);

    }
    
  }
  switchToLogin(){

     this.signUpMode = !this.signUpMode;
  }


}
