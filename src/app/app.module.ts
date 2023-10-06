import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgOptimizedImage} from "@angular/common";
import {ChannelComponent} from "./features/feature-header/components/channel/channel.component";
import {HeaderComponent} from "./core/components/header.component/header.component";
import {ProfileComponent} from "./features/feature-header/components/profile/profile.component";
import {ProfilePageComponent} from "./features/feature-profile/pages/profile-page.component";
import {MainPageComponent} from "./core/page/main-page.component";
import {FormsModule} from "@angular/forms";
import {FullScreenButtonComponent} from "./shared/components/ui/wide-button/full-screen-button.component";
import {TableRowComponent} from "./features/feature-profile/components/table-row/table-row.component";

@NgModule({
  declarations: [
    AppComponent,
    FullScreenButtonComponent,
    TableRowComponent,
    MainPageComponent,
    HeaderComponent,
    ProfileComponent,
    ChannelComponent,
    ProfilePageComponent
  ],
      imports: [
            BrowserModule,
            AppRoutingModule,
            NgOptimizedImage,
            FormsModule
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
