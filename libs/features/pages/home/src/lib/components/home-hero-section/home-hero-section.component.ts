// import { Component } from '@angular/core';

// @Component({
//   selector: 'elewa-website-home-hero-section',
//   templateUrl: './home-hero-section.component.html',
//   styleUrls: ['./home-hero-section.component.scss'],
// })
// export class HomeHeroSectionComponent {}

import { Component } from '@angular/core';
import { __homeButtonData, __homeHerotexts, __homeImageConfig } from '@elewa-website/data/sections';


@Component({
  selector: 'elewa-website-home-hero-section',
  templateUrl: './home-hero-section.component.html',
  styleUrls: [ './home-hero-section.component.scss' ],
})
export class HomeHeroSectionComponent {

  buttonData = __homeButtonData
  heroTexts = __homeHerotexts
  imageConfig = __homeImageConfig

}