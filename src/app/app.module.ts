import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgOptimizedImage} from "@angular/common";
import {ChannelComponent} from "./features/feature-header/components/channel/channel.component";
import {HeaderComponent} from "./core/components/header/header.component.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChannelComponent
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
