import { Component } from '@angular/core';
import { HeaderComponent } from './utilities/header/header.component';
import { HomeComponent } from './paths/home/home.component';
import { FooterComponent } from './utilities/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents : [ HeaderComponent , HomeComponent , FooterComponent ]
})
export class AppComponent {
  title = 'app';
}
