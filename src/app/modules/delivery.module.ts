import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DeliveryInfPageComponent
} from "../features/feature-delivery/pages/delivery-inf-page/delivery-inf-page.component";
import {
  DeliveryIconsComponent
} from "../features/feature-delivery/components/delivery-icons/delivery-icons.component";
import {DeliverHomeComponent} from "../features/feature-delivery/components/deliver-home/deliver-home.component";
import {PickupStoreComponent} from "../features/feature-delivery/components/pickup-store/pickup-store.component";
import {DistributionComponent} from "../features/feature-delivery/components/distribution/distribution.component";
import {
  DistributionPointsPageComponent
} from "../features/feature-delivery/pages/distribution-points-page/distribution-points-page.component";
import {DeliveryInputComponent} from "../features/feature-delivery/components/delivery-input/delivery-input.component";
import {FormsModule} from "@angular/forms";
import {SearchFilterPipe} from "../shared/pipes/search-filter.pipe";



@NgModule({
  declarations: [
    DeliveryInfPageComponent,
    DeliveryIconsComponent,
    DeliverHomeComponent,
    PickupStoreComponent,
    DistributionComponent,
    DeliveryInputComponent,
    DistributionPointsPageComponent,
    SearchFilterPipe
  ],
  exports: [
    PickupStoreComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DeliveryModule { }
