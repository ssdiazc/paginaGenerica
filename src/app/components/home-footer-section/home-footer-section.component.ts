import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/utilities/services/constants.service';

let FOOTER_CONSTANTS: any;

@Component({
  selector: 'app-home-footer-section',
  templateUrl: './home-footer-section.component.html',
  styleUrls: ['./home-footer-section.component.scss'],
})
export class HomeFooterSectionComponent implements OnInit {
  constructor(constantsService: ConstantsService) {
    FOOTER_CONSTANTS = constantsService.selectorConstants('footer');
  }

  ngOnInit(): void {}

  get footerConstants() {
    return FOOTER_CONSTANTS;
  }

  openRef(url: string, option?: string | undefined) {
    if (!!url && url.length > 0) window.open(url, !!option ? option : '');
  }
}
