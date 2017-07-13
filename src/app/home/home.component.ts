import { Component } from '@angular/core';
import { InfoBannerComponent } from '../infobanner/infobanner.component';

@Component({
  selector : 'home-component',
  templateUrl : './home.component.html',
  styleUrls : [ './home.component.css' ],
  entryComponents : [ InfoBannerComponent ]
})

export class HomeComponent{
  title = 'Home component';
}
