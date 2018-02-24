import { NgModule }      from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component'
import {DashBoardComponent} from './dashboard.component'
import {HeroAddComponent} from './hero-add.component'

const routes:Routes=[
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
  },
  {
    path:'add',
    component:HeroAddComponent
  }
	];

@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule]
})

export class AppRoutingModule{}
