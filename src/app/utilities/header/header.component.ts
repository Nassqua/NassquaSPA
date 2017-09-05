import { Component , HostListener , Inject } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { DOCUMENT } from '@angular/platform-browser';
import { AuthService } from '../../services/auth-service';
import { NassquaAPIServices } from '../../services/nassqua.services';

import { Observable } from 'rxjs/observable';
import { NgRedux , select } from 'ng2-redux';

import { IAppState } from '../../store';

@Component({
  selector : 'header-component',
  templateUrl : './header.component.html',
  styleUrls : [ './header.component.css' ],
  entryComponents : [ LogoComponent ],
  providers : [ NassquaAPIServices ]
})


export class HeaderComponent{
  title = 'NASSQUA';
  logoFontSize = '28px';



  @select() emailUserLogged$ : Observable<string>;
  @select() nameUser$ : Observable<string>;

  userName;
  userEmail;
  isUserData = false;

  constructor(@Inject(DOCUMENT) private document: Document , private authService : AuthService , private nassquaAPIServices : NassquaAPIServices) {

    this.emailUserLogged$.subscribe(res => {
      if(res != null && res != '') this.getUserInfo(res);
    });

  }

  getUserInfo(email){

    this.nassquaAPIServices.getUserData(email)
      .subscribe( result => {
        this.userName = result.name;
        this.userEmail = result.email;
        this.isUserData = true;
      }, e => {

      })
  }

  checkScrollPage(){
    let number = this.document.body.scrollTop;
    if (number <= 3) {

      document.getElementById('navHeader').classList.remove('backFill');
      document.getElementById('navHeader').classList.add('backTransparent');

    } else  {

      document.getElementById('navHeader').classList.remove('backTransparent');
      document.getElementById('navHeader').classList.add('backFill');

    }
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.checkScrollPage();
  }


}
