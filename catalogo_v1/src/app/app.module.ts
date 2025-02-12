import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeFooterSectionComponent } from './components/home-footer-section/home-footer-section.component';
import { HomeHeaderSectionComponent } from './components/home-header-section/home-header-section.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SocialMediaBannerComponent } from './components/social-media-banner/social-media-banner.component';
import { BannerShowInfoTemplateComponent } from './components/banner-show-info-template/banner-show-info-template.component';
import { CardOnlyTextComponent } from './components/card-only-text/card-only-text.component';
import { CardTextTypeLlComponent } from './components/card-text-type-ll/card-text-type-ll.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeFooterSectionComponent,
    HomeHeaderSectionComponent,
    SocialMediaBannerComponent,
    BannerShowInfoTemplateComponent,
    CardOnlyTextComponent,
    CardTextTypeLlComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
