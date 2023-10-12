import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgOptimizedImage} from "@angular/common";
import {ChannelComponent} from "./features/feature-header/components/channel/channel.component";
import {HeaderComponent} from "./core/components/header/header.component";
import {ProfileComponent} from "./features/feature-header/components/profile/profile.component";
import {ProfilePageComponent} from "./features/feature-profile/pages/profile-page.component";
import {MainPageComponent} from "./core/page/main-page.component";
import {FormsModule} from "@angular/forms";
import {ButtonComponent} from "./shared/components/ui/button/button.component";
import {TableRowComponent} from "./features/feature-profile/components/table-row/table-row.component";
import {DataFormComponent} from "./shared/components/ui/data-form/data-form.component";
import {
  ProfileDeliveryInfComponent
} from "./features/feature-profile/components/profile-delivery-inf/profile-delivery-inf.component";
import {
  ProfileIconNameComponent
} from "./features/feature-profile/components/profile-icon-name/profile-icon-name.component";
import {ProfileStatusComponent} from "./features/feature-profile/components/profile-satus/profile-status.component";
import {
  ProfileInputFieldComponent
} from "./features/feature-profile/components/profile-input-field/profile-input-field.component";
import {TruncatePipe} from "./shared/pipes/truncate.pipe";
import {SearchBarWidgetComponent} from "./features/feature-search-bar/components/search-bar-widget/search-bar-widget.component";
import {SearchBarPageComponent} from "./features/feature-search-bar/pages/search-bar-page.component";
import {SearchBarComponent} from "./core/components/search-bar/search-bar.component";

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TableRowComponent,
    DataFormComponent,
    ProfileDeliveryInfComponent,
    ProfileIconNameComponent,
    ProfileStatusComponent,
    ProfileInputFieldComponent,
    TruncatePipe,
    SearchBarComponent,
    SearchBarWidgetComponent,
    SearchBarPageComponent,
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
export class AppModule {
}
