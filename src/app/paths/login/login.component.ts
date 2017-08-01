import { Component } from '@angular/core';
import {FormGroup , FormControl , Validators , AbstractControl } from '@angular/forms'
import { Authservice } from '../../services/authservice';
import { Router } from '@angular/router';


@Component({
  selector : 'login-component',
  templateUrl : './login.component.html',
  styleUrls : [ './login.component.css' ],
  providers : [ Authservice ]
})

export class LoginComponent{
  title = 'Login'
  isPath = true;
  videoHeight = '20vh';
  iconVideo = 'assets/videos/infobanner5.mp4';
  titleMarginTop = '70px';
  titleFontSize = '50px';

  lblTitle1 = 'Welcome to ';
  lblTitle2 = 'Log in'
  logoFontSize = '16px';
  logoMainTextColor = 'Black';

  form;

  localUser = {
    email : '',
    password : ''
  }

  constructor(private _service:Authservice , private _router : Router){

  }

  login(){
    this._service.loginFn(this.localUser)

    .then( (res) => {
        if(res){
            this._router.navigate(['experiences'])
        }
        else{
          console.log(res);
        }
    })

    .catch(e => {

      console.log("reject: " + e.message);

    });


  }

  ngOnInit(){

    this.form = new FormGroup({
      email : new FormControl("" , Validators.required),
      password : new FormControl("" , Validators.required)
    });

  }

  onSubmit = function(user)
  {
    console.log(user);

    this.localUser.email = user.email;
    this.localUser.password = user.password;


    this.login();

  }

}
