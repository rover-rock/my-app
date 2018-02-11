import { Component,OnInit } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
	selector:'heroes',
	template:`
	<h1>{{title}}</h1>
 
  <ul>
    <li *ngFor='let hero of heroes' (click)='onSelect(hero)' [class.selected]='hero==selectedHero'  [routerLink]="['/detail',hero.id]">
      <div><label>id: </label>{{hero.id}}</div>
      <div><label>name: </label><input type="text" [(ngModel)]='hero.name' placeholder="name" ></div>
    </li>
  </ul>
  `,
  styles:[`
  	    .selected {
      background-color: #CFD8DC !important;
      color: white;
    	}
  `],
  
})

export class HeroesComponent implements OnInit{
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