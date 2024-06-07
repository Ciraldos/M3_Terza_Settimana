import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './main_components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { Component404Component } from './pages/component404/component404.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Component404Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
