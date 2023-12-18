import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SharedModule} from './modules/shared.module';
import {MainPageModule} from "./modules/main-page.module";
import {ActionCardsModule} from "./modules/action-cards.module";
import {HeaderModule} from "./modules/header.module";
import {SearchBarModule} from "./modules/search-bar.module";
import {ArticlesModule} from "./modules/articles.module";
import {ProfileModule} from "./modules/profile.module";
import {DeliveryModule} from "./modules/delivery.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule,
    SharedModule,
    MainPageModule,
    ActionCardsModule,
    ArticlesModule,
    HeaderModule,
    SearchBarModule,
    ProfileModule,
    DeliveryModule,
    HttpClientModule
  ],
  providers: [
  //   {
  //   provide: DeliveryOptionStateService,
  //   useFactory: (currentOption: DeliveryOptionStateService, optionsArray: IDeliveryOptions[]) => {
  //
  //   }
  // }
  ],
  bootstrap: [AppComponent]
}
)
export class AppModule {
}
