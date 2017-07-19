import { Component } from '@angular/core';
import { VideoCoverComponent } from '../videocover/videocover.component';

@Component({
  selector : 'infobanner-component',
  templateUrl : './infobanner.component.html',
  styleUrls : [ './infobanner.component.css' ],
  entryComponents : [ VideoCoverComponent ]
})

export class InfoBannerComponent{
  iconVideo = 'assets/videos/infobanner2.mp4';
  bannerInfo = 'Live real natural and cultural experiences !!';
  logoFontSize = '24px';
  videoHeight = '40vh';
  infoBannerTop = '60px';
}
