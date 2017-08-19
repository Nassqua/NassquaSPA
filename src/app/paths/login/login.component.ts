import { Component } from '@angular/core';
import {FormGroup , FormControl , Validators , AbstractControl } from '@angular/forms'

import { AuthService } from '../../services/auth-service';

import { Router } from '@angular/router';

import { Users } from '../../models/users.model';

import { LoadingComponent } from '../../utilities/loading/loading.component';

import { ErrorLabelComponent } from '../../utilities/errorlabel/errorlabel.component';

import { IAppState } from '../../store';

import { NgRedux } from 'ng2-redux';
import { NassquaActions } from '../../actions';

@Component({
  selector : 'login-component',
  templateUrl : './login.component.html',
  styleUrls : [ './login.component.css' ],
  providers : [ AuthService],
  entryComponents : [ LoadingComponent ,  ErrorLabelComponent]
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

  localUser:Users = new Users();

  loading:Boolean = false;

  error = '';

  errorTitle = "";
  errorVisible = false;

  constructor(private _service:AuthService ,  private _router : Router , private ngRedux : NgRedux<IAppState> , private nassquaActions : NassquaActions){

  }

  login(email){

      this.loading = true;

      this._service.login(this.localUser)
        .subscribe( result => {
          console.log(result);
          if(result === true)
          {
            //save login state

            this.nassquaActions.addEmailUserLogged(email);
            this.nassquaActions.addNameUser('heinner zapata');

            this._router.navigate(['experiences']);
            this.errorVisible = false;

            this._service.userEmail.next(email);

          }
          else{

            this.error = 'Credenciales incorrectas';
            this.loading = true;
          }
        }, e => {

            this.error = 'Credenciales incorrectas';
            console.log("reject: " + e.message);

            this.errorTitle = 'Check your email and password';
            this.errorVisible = true;


            this.loading = false;
        })

  }

  ngOnInit(){


    this.form = new FormGroup({
      email : new FormControl("" , Validators.required),
      password : new FormControl("" , Validators.required)
    });

    this._service.logout();

  }

  onSubmit = function(user)
  {
    console.log(user);

    this.localUser.email = user.email;
    this.localUser.password = user.password;

    this.login(this.localUser.email);

  }

}
