import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from "../features/feature-header/components/profile/profile.component";
import {ChannelComponent} from "../features/feature-header/components/channel/channel.component";
import {SharedModule} from "./shared.module";

@NgModule({
  declarations: [
    ProfileComponent,
    ChannelComponent
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
