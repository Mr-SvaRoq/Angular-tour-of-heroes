import { Component, OnInit } from '@angular/core';
// import { HEROES } from '../mock-heroes';
import {IHero} from "../interfaces/hero";
import { HeroService } from '../hero.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero : IHero = {
  //   id: 1,
  //   name: 'Mr. SvaRoq'
  // };

  // selectedHero: IHero;
  // heroes: IHero[] = [...HEROES, this.hero, <IHero>{id: 2, name: "Chiffinko"}];
  heroes: IHero[];



  // onSelect(hero: IHero): void {
  //   this.selectedHero = hero;
  // }

  constructor(private heroService: HeroService) { //inject heroService

  }


  ngOnInit() {
    // const [a,b] = [1,2]; //destrution
    this.getHeroes();
  }

  getHeroes(): void{
    // this.heroes = this.heroService.getHeroes(); //synchronne, ale to nechceme (teraz berieme, len mock-data).... treba to zmenit na asyncj .... It can take a callback. It could return a Promise. It could return an Observable
    // console.log('skuskaaaaaaa');
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes); //Observable.subscribe()

    //    this.heroService.getHeroes().subscribe(s);
    //
    //     function s(heroes) {
    //       return this.heroes = heroes;
    //     } //Observable.subscribe()
  }

}
