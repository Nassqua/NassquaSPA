import { Injectable } from '@angular/core';
import { Http , Headers , RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class Authservice {
  isLoggedIn : boolean

  constructor(private _http:Http){

  }

  loginFn(usercreds){
    this.isLoggedIn = false;

    let body:any = { "email": usercreds.email, "password": usercreds.password };
    let url = "http://localhost:3000/api/singin";
    let response:any;
    let headers    = new Headers({ 'Content-Type': 'application/json' });
    let options    = new RequestOptions({ headers: headers });

    return new Promise((resolve , reject) => {

      this._http.post('http://localhost:3000/api/singin' , body, headers)

      .catch(err => {

        console.log(err.json());
        reject(err.json());
        return Observable.throw(err.json().data || 'Server error');

      })

      .subscribe( data => {

        // Login OK
        if(data.status == 200){
          console.log(data.json());
          if(data.json() && data.json().token)
            {
               window.localStorage.setItem('auth_key' , data.json().token);
               this.isLoggedIn = true;
               resolve(this.isLoggedIn);
            }
        }

      })

      /*


      */




    });

  }


}
