import { Injectable } from '@angular/core';
import { Http , Response , Headers , RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Config } from '../Config';


import { Experiences } from '../models/experiences.model';

 @Injectable()

 export class NassquaAPIServices{

   private apiUrl = Config.apiProvider;

   constructor(private http : Http){}

   // <Experiences>

   getExperiences() : Observable<any> {
     return this.http.get(this.getUrl('experiences') , this.getOptions()).map(this.getDatos).catch(this.error);
   }

   // </Experiences>

   // <Users>

   getUser() : Observable<any> {
     return this.http.get(this.getUrl('users') , this.getOptions()).map(this.getDatos).catch(this.error);
   }

   getUserData(email) : Observable<any>{
     return this.http.get(this.getUrl('getuserdata') ,this.getOptions()).map(this.getDatos).catch(this.error);
   }

   // </Users>


   private error(error : any){
     let msg = (error.messae) ? error.message : 'Error desconocido';
     console.error(msg);
     return Observable.throw(msg);
   }

   private getDatos(data: Response){
     let datos = data.json();
     return datos || [];
   }

   private getUrl(modelo : String){
     return this.apiUrl + modelo;
   }

   private getOptions() : RequestOptions{
     let auth = new Headers( {'Authorization' : 'Bearer ' + sessionStorage.getItem('auth_key') } );
     let options = new RequestOptions( { headers : auth } );
     return options;
   }


 }
