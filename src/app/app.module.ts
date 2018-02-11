import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import {RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component'
import {DashBoardComponent} from './dashboard.component'

import {HeroService} from './hero.service'


import {AppRoutingModule} from './app-routing.module'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule ,// <-- import the FormsModule before binding with [(ngModel)]
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashBoardComponent
  ],
  bootstrap: [ AppComponent ],
  providers:[HeroService]
})


export class AppModule { }