import { Component , Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector : 'logo-component',
  templateUrl : './logo.component.html',
  styleUrls : [ './logo.component.css' ]
})

export class LogoComponent{

  t1 = 'NA';
  t2 = 'SS';
  t3 = 'QUA';

  @Input()
  logoFontSize = '10px';

  constructor(){


  }

}
