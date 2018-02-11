import { Component,OnInit } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service'

  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`
  	    .selected {
      background-color: #CFD8DC !important;
      color: white;
    	}
  `],
  providers:[HeroService]
})

export class AppComponent implements OnInit {
	title='tour of heroes';
	selectedHero:Hero;
	 heroes:Hero[];

	 constructor(private heroService:HeroService){	 }
	 ngOnInit():void{
	 	this.getHeroes();
	 }
	 getHeroes():void{
	 this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
	 }
	 onSelect(value:Hero):void{
	 	this.selectedHero=value;
	 }
  }

