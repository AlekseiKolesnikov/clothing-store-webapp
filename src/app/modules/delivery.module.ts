import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  DeliveryInfPageComponent
} from "../features/feature-delivery/pages/delivery-inf-page/delivery-inf-page.component";
import {DeliveryIconsComponent} from "../features/feature-delivery/components/delivery-icons/delivery-icons.component";
import {PickupStoreComponent} from "../features/feature-delivery/components/pickup-store/pickup-store.component";
import {DistributionComponent} from "../features/feature-delivery/components/distribution/distribution.component";
import {
  DistributionPointsPageComponent
} from "../features/feature-delivery/pages/distribution-points-page/distribution-points-page.component";
import {DeliveryInputComponent} from "../features/feature-delivery/components/delivery-input/delivery-input.component";
import {FormsModule} from "@angular/forms";
import {SearchFilterPipe} from "../shared/pipes/search-filter.pipe";
import {
  DistributionAddressPageComponent
} from "../features/feature-delivery/pages/distribution-address-page/distribution-address-page.component";
import {
  DataSearchComponent
} from "../shared/components/data-search/data-search.component";
import {SharedModule} from "./shared.module";
import {
  PersonalDataFieldComponent
} from "../features/feature-delivery/components/personal-data-field/personal-data-field.component";


@NgModule({
  declarations: [
    DeliveryInfPageComponent,
    DeliveryIconsComponent,
    PickupStoreComponent,
    DistributionComponent,
    DeliveryInputComponent,
    DistributionPointsPageComponent,
    SearchFilterPipe,
    DistributionAddressPageComponent,
    DataSearchComponent,
    PersonalDataFieldComponent
  ],
  exports: [
    PickupStoreComponent,
    DataSearchComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule
    ]
})
export class DeliveryModule { }
