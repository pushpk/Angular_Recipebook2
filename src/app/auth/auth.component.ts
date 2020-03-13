import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import {AuthService} from './authservice.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  signUpMode: boolean = false;
  userToken :string = null;

  constructor(private authSer : AuthService, private router : Router) { }

  ngOnInit() {
    this.authSer.signedUpOrLoginSuccess.subscribe((signedUpOrLoginToken  :string) => {

        console.log(signedUpOrLoginToken);
      if(signedUpOrLoginToken)
      {
          this.router.navigate(['/recipes'])
      }
      

    });
  }

  onSubmit(form : NgForm){

    if(this.signUpMode)
    {
      this.authSer.signup(form.value.email,form.value.password);

    }
    else
    {
      this.authSer.login(form.value.email,form.value.password);
    }
    
  }
  switchToLogin(){

     this.signUpMode = !this.signUpMode;
  }


}
