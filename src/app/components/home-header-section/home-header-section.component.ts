import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantsService } from 'src/app/utilities/services/constants.service';

let HEADER_CONSTANTS: any;

@Component({
  selector: 'app-home-header-section',
  templateUrl: './home-header-section.component.html',
  styleUrls: ['./home-header-section.component.scss'],
})
export class HomeHeaderSectionComponent implements OnInit {
  constructor(constantsService: ConstantsService, private router: Router) {
    HEADER_CONSTANTS = constantsService.selectorConstants('header');
  }

  ngOnInit(): void {}

  get headerConstants() {
    return HEADER_CONSTANTS;
  }

  goto(url?: string, openOption?: string) {
    if (!!openOption && openOption === 'router') {
      this.router.navigate(['/', url]);
      window.scrollTo(0, 0);
    } else if (!!url && url?.length > 0) {
      window.open(url, !!openOption ? openOption : '');
    }
  }
}
