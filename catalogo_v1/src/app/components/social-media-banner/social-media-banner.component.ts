import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SocialMediaIconsStructureInterface } from 'src/app/utilities/interfaces/home-footer';

@Component({
  selector: 'app-social-media-banner',
  templateUrl: './social-media-banner.component.html',
  styleUrls: ['./social-media-banner.component.scss'],
})
export class SocialMediaBannerComponent implements OnInit {
  @Input() socialMediaInformation:
    | SocialMediaIconsStructureInterface[]
    | undefined;

  @Output() goto = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
  handleClickOnSM(url: string) {
    this.goto.emit(url);
  }
}
