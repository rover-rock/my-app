import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import {RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component'
import {DashBoardComponent} from './dashboard.component'

import {HeroService} from './hero.service'





@NgModule({
  imports: [
    BrowserModule,
    FormsModule ,// <-- import the FormsModule before binding with [(ngModel)]
    RouterModule.forRoot([
    {

	path:'heroes',
	component:HeroesComponent

	},
	{
		path:'dashboard',
		component:DashBoardComponent
	},
	{
 	 path: '',
  	redirectTo: '/dashboard',
  	pathMatch: 'full'
	},
	{
		path:'detail/:id',
		component:HeroDetailComponent
	}
	])
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