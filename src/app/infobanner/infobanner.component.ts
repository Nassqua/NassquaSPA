import { Component } from '@angular/core';
import { VideoCoverComponent } from '../videocover/videocover.component';

@Component({
  selector : 'infobanner-component',
  templateUrl : './infobanner.component.html',
  styleUrls : [ './infobanner.component.css' ],
  entryComponents : [ VideoCoverComponent ]
})

export class InfoBannerComponent{
  bannerInfo = 'Live real natural and cultural experiences !!'
  logoFontSize = '12px';
}
