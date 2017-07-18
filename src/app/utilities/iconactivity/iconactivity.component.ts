import { Component , Input } from '@angular/core';

@Component({
  selector : 'iconactivity-component',
  templateUrl : './iconactivity.component.html',
  styleUrls : ['./iconactivity.component.css']
})

export class IconActivityComponent{

  @Input()
  iconActivity;

  iconPath = "assets/icons/";

  constructor(){
    
  }

  ngOnInit(){
    this.iconPath = this.iconPath + this.iconActivity + '.svg';
  }

}
