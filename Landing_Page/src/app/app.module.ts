import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BannerComponent } from './banner/banner.component';
import { FeaturesComponent } from './features/features.component';
import { ImagesComponent } from './images/images.component';
import { ProfileComponent } from './profile/profile.component';
import { BannerloginComponent } from './bannerlogin/bannerlogin.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BannerComponent,
    FeaturesComponent,
    ImagesComponent,
    ProfileComponent,
    BannerloginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
