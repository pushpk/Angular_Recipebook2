import { HttpClient } from "@angular/common/http";
import { Params } from "@angular/router";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {


    constructor(private http: HttpClient) { }


    signedUpOrLoginSuccess = new Subject<string>();
    
    //using https://reqres.in/ for login and password


    isUsedLoggedIn(){

       return localStorage.getItem('user-token') ? true: false;
    }

    //login
    login(email: string, password: string) {
        var requestObj = { email: email, password: password };
        this.http.post("https://reqres.in/api/login", requestObj).subscribe((params: Params) => {

            localStorage.setItem("user-token",params.token);
            this.signedUpOrLoginSuccess.next(params.token);

        }, (error: any) => {
            this.signedUpOrLoginSuccess.next("");
        })


    }

    //signup
    signup(email: string, password: string) {
        var requestObj = { email: email, password: password };
        this.http.post("https://reqres.in/api/register", requestObj).subscribe((params: Params) => {
            
            localStorage.setItem("user-token",params.token);
            this.signedUpOrLoginSuccess.next(params.token);
        }, (error: any) => {
            this.signedUpOrLoginSuccess.next("");
        })

    }
    //logout
}