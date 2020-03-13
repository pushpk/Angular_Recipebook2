import { HttpClient } from "@angular/common/http";
import { Params } from "@angular/router";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class AuthService{
   

constructor(private http : HttpClient){}


signedUpSuccess = new Subject<string>();

    //using https://reqres.in/ for login and password

    //login

    login(email : string, password: string)
    {
        var requestObj = { email : email, password : password};
        this.http.post("https://reqres.in/api/register",requestObj).subscribe((params : Params) => {
              
        })


    }

    //signup
    signup(email : string, password: string){
        var requestObj = { email : email, password : password};
        this.http.post("https://reqres.in/api/register",requestObj).subscribe((params : Params) => {
            
            this.signedUpSuccess.next(params.token);
        }, (error : any) => {

                this.signedUpSuccess.next("");
        })

    }
    //logout
}