import { Component } from '@angular/core';

@Component({
  selector : 'login-component',
  templateUrl : './login.component.html',
  styleUrls : [ './login.component.css' ]
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

}
