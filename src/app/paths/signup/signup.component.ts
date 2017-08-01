import { Component } from '@angular/core';
import {FormGroup , FormControl , Validators , AbstractControl } from '@angular/forms'

@Component({
  selector : 'signup-component',
  templateUrl : './signup.component.html',
  styleUrls : [ './signup.component.css' ]
})

export class SignUpComponent{
  title = 'SignUp'
  isPath = true;
  videoHeight = '20vh';
  iconVideo = 'assets/videos/infobanner5.mp4';
  titleMarginTop = '70px';
  titleFontSize = '50px';

  lblTitle1 = 'Welcome to ';
  lblTitle2 = 'Sign Up'
  logoFontSize = '16px';
  logoMainTextColor = 'Black';

  form;


  ngOnInit(){

    this.form = new FormGroup({
      email : new FormControl("" , Validators.required),
      firstName : new FormControl("" , Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),
      lastName : new FormControl("" , Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),
      createPassword : new FormControl("" , Validators.required ),
      confirmPassword : new FormControl("" , Validators.required)
    } , this.confirmPasswordValidator);

  }

  confirmPasswordValidator(AC: AbstractControl){
    let password = AC.get('createPassword').value; // to get value in input tag
    let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
    if(password !== confirmPassword){
      document.getElementById('confirmPassword').classList.remove('valid');
      document.getElementById('confirmPassword').classList.add('invalid');
      return { 'confirmPassword' : false };
    }
    else{
      document.getElementById('confirmPassword').classList.remove('invalid');
      document.getElementById('confirmPassword').classList.add('valid');
    }

  }

  
  onSubmit = function(user)
  {
    console.log(user);
  }

}
