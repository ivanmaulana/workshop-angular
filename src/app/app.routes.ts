import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { NoContentComponent } from './no-content/no-content.component'

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: MainComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: '**', component: NoContentComponent, pathMatch: 'full' }
];
