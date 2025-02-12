import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/utilities/services/constants.service';

let HEADER_CONSTANTS: any;

@Component({
  selector: 'app-home-header-section',
  templateUrl: './home-header-section.component.html',
  styleUrls: ['./home-header-section.component.scss'],
})
export class HomeHeaderSectionComponent implements OnInit {
  constructor(constantsService: ConstantsService) {
    HEADER_CONSTANTS = constantsService.selectorConstants('header');
  }

  ngOnInit(): void {}

  get headerConstants() {
    return HEADER_CONSTANTS;
  }
}
