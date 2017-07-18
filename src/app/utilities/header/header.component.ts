import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector : 'header-component',
  templateUrl : './header.component.html',
  styleUrls : [ './header.component.css' ],
  entryComponents : [ LogoComponent ]
})

export class HeaderComponent{
  title = 'NASSQUA';
  logoFontSize = '28px';
}
