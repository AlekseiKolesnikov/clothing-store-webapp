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
import {ProfileModule} from "./modules/profile.module";
import {DeliveryModule} from "./modules/delivery.module";
import {HttpClientModule} from "@angular/common/http";
import {DeliveryOptionStateService} from "./features/feature-delivery/services/delivery-option-state.service";
import {DeliveryIconService} from "./features/feature-delivery/services/delivery-icon.service";
import {ProductModule} from "./modules/product.module.ts.module";

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
      HeaderModule,
      SearchBarModule,
      ProfileModule,
      DeliveryModule,
      HttpClientModule,
      ProductModule
    ],
    providers: [
      {
        provide: DeliveryOptionStateService,
        useFactory: (deliveryIconsService: DeliveryIconService) => {
          return new DeliveryOptionStateService(deliveryIconsService)
        },
        deps: [DeliveryIconService]
      }
    ],
    bootstrap: [AppComponent]
  }
)
export class AppModule {
}
