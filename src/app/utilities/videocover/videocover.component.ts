import { Component , Input  } from '@angular/core';

@Component({
  selector: 'videocover-component',
  templateUrl : './videocover.component.html',
  styleUrls : [ './videocover.component.css' ]
})

export class VideoCoverComponent{

  @Input()
  iconVideo = '';

  @Input()
  videoHeight = '10vh';

  constructor(){

  }


}
