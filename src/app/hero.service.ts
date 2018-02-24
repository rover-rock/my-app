import {Injectable} from '@angular/core'
import {Headers,Http} from '@angular/http'

import {Hero} from './hero'

import 'rxjs/add/operator/toPromise';

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

@Injectable()
export class HeroService{
     private heroUrl='/list';
      constructor(private http:Http){};

	getHeroes():Promise<Hero[]>{
         return   this.http.get(this.heroUrl)
                 .toPromise()

                .then(response => response.json() as Hero[])






	}
  getHero(id:number):Promise<Hero>{
            return this.getHeroes().then(heroes=>heroes.find(hero=>hero.id===id));
      }

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
      }

}
