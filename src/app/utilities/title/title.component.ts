import { Component , Input } from '@angular/core';

@Component({
  selector : 'title-component',
  templateUrl : './title.component.html',
  styleUrls : [ './title.component.css' ]
})

export class TitleComponent{

  @Input()
  titleHeight = '';

  @Input()
  titleFontSize = '12px';

  @Input()
  title = 'Experiences';

  @Input()
  titleMarginTop = '0px';

}
