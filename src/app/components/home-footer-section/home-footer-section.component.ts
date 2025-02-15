import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantsService } from 'src/app/utilities/services/constants.service';

let FOOTER_CONSTANTS: any;

@Component({
  selector: 'app-home-footer-section',
  templateUrl: './home-footer-section.component.html',
  styleUrls: ['./home-footer-section.component.scss'],
})
export class HomeFooterSectionComponent implements OnInit {
  constructor(constantsService: ConstantsService, private router: Router) {
    FOOTER_CONSTANTS = constantsService.selectorConstants('footer');
  }

  ngOnInit(): void {}

  get footerConstants() {
    return FOOTER_CONSTANTS;
  }

  openRef(url?: string, openOption?: string) {
    if (!!openOption && openOption === 'router') {
      this.router.navigate(['/', url]);
      window.scrollTo(0, 0);
    } else if (!!url && url?.length > 0) {
      window.open(url, !!openOption ? openOption : '');
    }
  }
}
