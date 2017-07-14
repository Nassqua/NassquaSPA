import { Component } from '@angular/core';
import { IconActivityComponent } from '../iconactivity/iconactivity.component';

@Component({
  selector : 'iactbanner-component',
  templateUrl : './iactbanner.component.html',
  styleUrls : ['./iactbanner.component.css'],
  entryComponents : [ IconActivityComponent ]
})

export class IactBannerComponent{
  title = 'íactbanner component';

  iconActivity1 = 'walking';
  iconActivity2 = 'biking';
  iconActivity3 = 'eating';
  iconActivity4 = 'cultural';

}
