import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FriendsCardComponent} from "../../features/feature-friends-card/components/friends-card.component";
import {FriendsCardPageComponent} from "../../features/feature-friends-card/pages/friends-card-page.component";
import {OrderCardComponent} from "../../features/feature-order-card/components/order-card/order-card.component";
import {OrderCardPageComponent} from "../../features/feature-order-card/pages/order-card-page.component";
import {PointsCardComponent} from "../../features/feature-points-card/components/points-card.component";
import {PointsCardPageComponent} from "../../features/feature-points-card/pages/points-card-page.component";
import {
  SquareWidgetOrderPageComponent
} from "../../features/feature-order-card/components/square-widget-order-page/square-widget-order-page.component";
import {
  FullScreenWidgetOrderPageComponent
} from "../../features/feature-order-card/components/full-screen-widget-order-page/full-screen-widget-order-page.component";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    FriendsCardComponent,
    FriendsCardPageComponent,
    OrderCardComponent,
    OrderCardPageComponent,
    PointsCardComponent,
    PointsCardPageComponent,
    SquareWidgetOrderPageComponent,
    FullScreenWidgetOrderPageComponent
  ],
  exports: [
    PointsCardComponent,
    FriendsCardComponent,
    OrderCardComponent
  ],
    imports: [
        CommonModule,
        RouterLink
    ]
})
export class ActionCardsModule { }
