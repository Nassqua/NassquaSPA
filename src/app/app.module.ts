import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';

import { HomeComponent } from './home/home.component';
import { InfoBannerComponent } from './infobanner/infobanner.component';
import { VideoCoverComponent } from './videocover/videocover.component';
import { IactBannerComponent } from './iactbanner/iactbanner.component';
import { IconActivityComponent } from './iconactivity/iconactivity.component';

import { FooterComponent } from './footer/footer.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { routes } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    InfoBannerComponent,
    VideoCoverComponent,
    LogoComponent,
    IactBannerComponent,
    IconActivityComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    routes,
    FormsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
