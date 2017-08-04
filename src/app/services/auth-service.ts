import { Injectable } from '@angular/core';
import { Http , Headers , RequestOptions , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Users } from '../models/users.model';



@Injectable()
export class AuthService{


  private apiUrl = 'http://localhost:3000/api/';

  userEmail : Subject<any> = new Subject<any>();

  constructor(private http: Http){}

  getUserId() : Observable<any> {
    return
  }

  login(Usuario : Users) : Observable<boolean> {

    let body = 'email=' + Usuario.email + '&password=' + Usuario.password;

    let headers = new Headers( { 'Content-Type' : 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ 'headers' : headers });

    return this.http.post(this.getUrl('singin'), body, options).map(this.getDatos).catch(this.error);

  }

  logout() : void{
    sessionStorage.removeItem('auth_key');
  }

  private error(error : any){
    let msg = (error.message) ? error.message : 'Error desconocido';
    console.error(msg);
    return Observable.throw(msg);
  }

  private getDatos(data: Response){
    let datos = data.json();

    if(datos && datos.token)
    {
      sessionStorage.setItem('auth_key' , data.json().token);
      return true;
    }
    return false;
  }

  private getUrl(modelo : String){
    return this.apiUrl + modelo;
  }

}
