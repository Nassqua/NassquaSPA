import { Component , HostListener , Inject } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { DOCUMENT } from '@angular/platform-browser';
import { AuthService } from '../../services/auth-service';


import { Observable } from 'rxjs/observable';
import { NgRedux , select } from 'ng2-redux';

@Component({
  selector : 'header-component',
  templateUrl : './header.component.html',
  styleUrls : [ './header.component.css' ],
  entryComponents : [ LogoComponent ]
})


export class HeaderComponent{
  title = 'NASSQUA';
  logoFontSize = '28px';

  userEmail;

  @select() emailUserLogged$ : Observable<string>;
  @select() nameUser$ : Observable<string>;

  constructor(@Inject(DOCUMENT) private document: Document , private authService : AuthService) {

      

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
