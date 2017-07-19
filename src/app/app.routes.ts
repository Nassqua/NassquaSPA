import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './paths/home/home.component';
import { ExperiencesComponent } from './paths/experiences/experiences.component';
import { LoginComponent } from './paths/login/login.component';

const Router: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'login', component: LoginComponent }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(Router);
