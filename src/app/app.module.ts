import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { NoContentComponent } from './no-content/no-content.component';

import { TypeaheadModule } from 'ng2-bootstrap/typeahead';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AboutComponent,
    NoContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TypeaheadModule.forRoot(),
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
