import { Component , Input } from '@angular/core';

@Component({
  selector : 'errorlabel-component',
  templateUrl : './errorlabel.component.html',
  styleUrls : [ './errorlabel.component.css' ]
})

export class ErrorLabelComponent{
  @Input()
  title = 'error label component';

  @Input()
  errorVisible = false;

  ngOnChanges() {

  }
}
