import { Component } from '@angular/core';
import { hero } from './heros';
import {HeroOne} from './HeroOne';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  Hero = hero;
  selectedHero="heroOneeeeee";
  onPress(her)
  {

    this.selectedHero=her;
  }
}
