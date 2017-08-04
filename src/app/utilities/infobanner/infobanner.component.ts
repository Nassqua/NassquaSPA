import { Component } from '@angular/core';
import { VideoCoverComponent } from '../videocover/videocover.component';
import { Router } from '@angular/router';

@Component({
  selector : 'infobanner-component',
  templateUrl : './infobanner.component.html',
  styleUrls : [ './infobanner.component.css' ],
  entryComponents : [ VideoCoverComponent ]
})

export class InfoBannerComponent{
  iconVideo = 'assets/videos/infobanner5.mp4';
  bannerInfo = 'Live natural and real cultural experiences.';
  logoFontSize = '60px';
  videoHeight = '40vh';
  infoBannerTop = '60px';

  btnTitle = 'Start now !!';

  constructor(private _router : Router){

  }

  signup(){
    this._router.navigate(['signup']);
  }

}
