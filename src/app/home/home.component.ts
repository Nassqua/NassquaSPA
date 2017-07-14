import { Component } from '@angular/core';
import { InfoBannerComponent } from '../infobanner/infobanner.component';
import { IactBannerComponent } from '../iactbanner/iactbanner.component';

@Component({
  selector : 'home-component',
  templateUrl : './home.component.html',
  styleUrls : [ './home.component.css' ],
  entryComponents : [ InfoBannerComponent , IactBannerComponent ]
})

export class HomeComponent{
  title = 'Home component';
}
