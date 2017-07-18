import { Component } from '@angular/core';
import { InfoBannerComponent } from '../../utilities/infobanner/infobanner.component';
import { IactBannerComponent } from '../../utilities/iactbanner/iactbanner.component';

@Component({
  selector : 'home-component',
  templateUrl : './home.component.html',
  styleUrls : [ './home.component.css' ],
  entryComponents : [ InfoBannerComponent , IactBannerComponent ]
})

export class HomeComponent{
  title = 'Home component';
  isPath = false;
}
