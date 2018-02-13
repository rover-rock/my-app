import {Component,OnInit} from '@angular/core';
import {HeroService} from './hero.service';
import {Hero} from './hero'
@Component({
	selector:'dashboard',
	templateUrl:'./dashboard.component.html'
})

export class DashBoardComponent implements OnInit{
	heroes:Hero[]=[];
	constructor(private heroService:HeroService){}

	ngOnInit():void{
		console.log(11)
		this.heroService.getHeroes()
					.then(response=>{
						this.heroes=response;
					})
			
			

	}
}