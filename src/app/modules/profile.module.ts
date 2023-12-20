import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableRowComponent} from "../features/feature-profile/components/table-row/table-row.component";
import {
  ProfileDeliveryInfComponent
} from "../features/feature-profile/components/profile-delivery-inf/profile-delivery-inf.component";
import {
  ProfileIconNameComponent
} from "../features/feature-profile/components/profile-icon-name/profile-icon-name.component";
import {ProfileStatusComponent} from "../features/feature-profile/components/profile-satus/profile-status.component";
import {ProfilePageComponent} from "../features/feature-profile/pages/profile-page/profile-page.component";
import {DeliveryModule} from "./delivery.module";
import {SharedModule} from "./shared.module";


@NgModule({
  declarations: [
    TableRowComponent,
    ProfileDeliveryInfComponent,
    ProfileIconNameComponent,
    ProfileStatusComponent,
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    DeliveryModule,
    SharedModule
  ]
})
export class ProfileModule { }
