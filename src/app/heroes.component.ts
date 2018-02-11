import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router'

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
	selector:'heroes',
	templateUrl:'./heroes.component.html',
  styleUrls:['./heroes.component.css'] ,
  
})

export class HeroesComponent implements OnInit{
	title='tour of heroes';
	selectedHero:Hero;
	 heroes:Hero[];

	 constructor(private heroService:HeroService,private router:Router){	 }
	 ngOnInit():void{
	 	this.getHeroes();
	 }
	 getHeroes():void{
	 this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
	 }
	 onSelect(value:Hero):void{
	 	this.selectedHero=value;
	 }
	 gotoDetail():void{
	 	this.router.navigate(['detail',this.selectedHero.id]);
	 }
}