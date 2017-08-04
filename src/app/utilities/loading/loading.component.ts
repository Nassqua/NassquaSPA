import { Component , Input } from '@angular/core';

@Component({
  selector : 'loading-component',
  templateUrl : './loading.component.html',
  styleUrls : [ './loading.component.css' ]
})

export class LoadingComponent{
  title = 'Loading...';

  @Input()
  isVisible = false;

}
