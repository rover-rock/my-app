import { Component } from '@angular/core';
import {Hero} from './hero';


   const HEROES: Hero[] = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`
  	    .selected {
      background-color: #CFD8DC !important;
      color: white;
    	}
  `]
})

export class AppComponent {
	title='tour of heroes';
	selectedHero:Hero;
	 heroes:Hero[]=HEROES;
	 onSelect(value:Hero):void{
	 	this.selectedHero=value;
	 }
  }

