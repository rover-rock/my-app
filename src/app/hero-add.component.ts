import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
  selector:'hero-add',
  templateUrl:'./hero-add.component.html'
})

export class HeroAddComponent{
  model=new Hero(18,'new hero');

  onSubmit(){
      console.log(this.model.name)

  }
  onKey(value){
    console.log(value)
  }

}
