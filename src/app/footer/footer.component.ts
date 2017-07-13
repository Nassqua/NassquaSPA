import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector : 'footer-component',
  templateUrl : './footer.component.html',
  styleUrls : ['./footer.component.css'],
  entryComponents : [ LogoComponent ]
})

export class FooterComponent{
  title = 'Footer component';
}
