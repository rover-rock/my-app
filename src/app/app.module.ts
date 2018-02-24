import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http'

import { AppComponent }  from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component'
import {DashBoardComponent} from './dashboard.component'
import { HeroAddComponent } from "./hero-add.component";
import { HighLightDirective } from "./highlight.directive";

import {HeroService} from './hero.service'


import {AppRoutingModule} from './app-routing.module'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule ,// <-- import the FormsModule before binding with [(ngModel)]
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashBoardComponent,
    HeroAddComponent,
    HighLightDirective,
  ],
  bootstrap: [ AppComponent ],
  providers:[HeroService]
})


export class AppModule { }
