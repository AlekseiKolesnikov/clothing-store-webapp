import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgOptimizedImage} from "@angular/common";
import {ChannelComponent} from "./features/feature-header/components/channel/channel.component";
import {HeaderComponent} from "./core/components/header.component/header.component";
import {ProfileComponent} from "./features/feature-header/components/profile/profile.component";
import {ProfilePageComponent} from "./features/feature-header/pages/profile-page.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    ChannelComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
