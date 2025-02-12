import { Component, Input, OnInit } from '@angular/core';
import { BannerInputButtonSectionStructureInterfaz } from 'src/app/utilities/interfaces/banner-component';

@Component({
  selector: 'app-banner-show-info-template',
  templateUrl: './banner-show-info-template.component.html',
  styleUrls: ['./banner-show-info-template.component.scss'],
})
export class BannerShowInfoTemplateComponent implements OnInit {
  @Input() dataToShow: any[] | undefined;
  @Input() horizontal: boolean = true;
  @Input() cardType: number = 1;
  @Input() buttonSection: BannerInputButtonSectionStructureInterfaz = {
    showButton: false,
  };
  @Input() title: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
