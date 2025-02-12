import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/utilities/services/constants.service';

let LOCATIONS_CONSTANTS: any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(constantsService: ConstantsService) {
    LOCATIONS_CONSTANTS = constantsService.selectorConstants('locations');
    console.log(LOCATIONS_CONSTANTS);
  }

  ngOnInit(): void {}

  get locationsConstants() {
    return LOCATIONS_CONSTANTS;
  }
}
