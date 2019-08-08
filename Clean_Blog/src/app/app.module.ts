import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SpostComponent } from './spost/spost.component';
import { ContactComponent } from './contact/contact.component';
import { HnavComponent } from './hnav/hnav.component';
import { HheaderComponent } from './hheader/hheader.component';
import { HcontentComponent } from './hcontent/hcontent.component';
import { HpagerComponent } from './hpager/hpager.component';
import { HfooterComponent } from './hfooter/hfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SpostComponent,
    ContactComponent,
    HnavComponent,
    HheaderComponent,
    HcontentComponent,
    HpagerComponent,
    HfooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
