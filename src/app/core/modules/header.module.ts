import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableRowComponent} from "../../features/feature-profile/components/table-row/table-row.component";
import {
  ProfileDeliveryInfComponent
} from "../../features/feature-profile/components/profile-delivery-inf/profile-delivery-inf.component";
import {
  ProfileIconNameComponent
} from "../../features/feature-profile/components/profile-icon-name/profile-icon-name.component";
import {ProfileStatusComponent} from "../../features/feature-profile/components/profile-satus/profile-status.component";
import {
  ProfileInputFieldComponent
} from "../../features/feature-profile/components/profile-input-field/profile-input-field.component";
import {ProfileComponent} from "../../features/feature-header/components/profile/profile.component";
import {ChannelComponent} from "../../features/feature-header/components/channel/channel.component";
import {ProfilePageComponent} from "../../features/feature-profile/pages/profile-page.component";
import {SharedModule} from "../../shared/modules/shared-module/shared.module";

@NgModule({
  declarations: [
    TableRowComponent,
    ProfileDeliveryInfComponent,
    ProfileIconNameComponent,
    ProfileStatusComponent,
    ProfileInputFieldComponent,
    ProfileComponent,
    ChannelComponent,
    ProfilePageComponent
  ],
  exports: [
    ProfileComponent,
    ChannelComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HeaderModule { }
