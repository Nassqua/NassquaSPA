import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module


import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { HeaderComponent } from './utilities/header/header.component';
import { LogoComponent } from './utilities/logo/logo.component';

import { HomeComponent } from './paths/home/home.component';
import { InfoBannerComponent } from './utilities/infobanner/infobanner.component';
import { VideoCoverComponent } from './utilities/videocover/videocover.component';
import { IactBannerComponent } from './utilities/iactbanner/iactbanner.component';
import { IconActivityComponent } from './utilities/iconactivity/iconactivity.component';

import { ExperiencesComponent } from './paths/experiences/experiences.component';
import { TitleComponent } from './utilities/title/title.component';

import { LoginComponent } from './paths/login/login.component';

import { FooterComponent } from './utilities/footer/footer.component';

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
    IconActivityComponent,
    ExperiencesComponent,
    TitleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    routes,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
