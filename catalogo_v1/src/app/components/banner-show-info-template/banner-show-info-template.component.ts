import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-show-info-template',
  templateUrl: './banner-show-info-template.component.html',
  styleUrls: ['./banner-show-info-template.component.scss'],
})
export class BannerShowInfoTemplateComponent implements OnInit {
  @Input() inputData: any;

  constructor() {}

  ngOnInit(): void {}
}
