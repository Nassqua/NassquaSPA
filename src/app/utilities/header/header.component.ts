import { Component , HostListener , Inject } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { DOCUMENT } from '@angular/platform-browser';


@Component({
  selector : 'header-component',
  templateUrl : './header.component.html',
  styleUrls : [ './header.component.css' ],
  entryComponents : [ LogoComponent ]
})


export class HeaderComponent{
  title = 'NASSQUA';
  logoFontSize = '28px';

  constructor(@Inject(DOCUMENT) private document: Document) {


  }

  checkScrollPage(){
    let number = this.document.body.scrollTop;
    if (number <= 70) {

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
