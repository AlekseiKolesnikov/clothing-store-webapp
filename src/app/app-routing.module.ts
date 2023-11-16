import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfilePageComponent} from "./features/feature-profile/pages/profile-page/profile-page.component";
import {MainPageComponent} from "./core/page/main-page.component";
import {SearchBarPageComponent} from "./features/feature-search-bar/pages/search-bar-page.component";
import {OrderCardPageComponent} from "./features/feature-order-card/pages/order-card-page.component";
import {PointsCardPageComponent} from "./features/feature-points-card/pages/points-card-page.component";
import {FriendsCardPageComponent} from "./features/feature-friends-card/pages/friends-card-page.component";
import {DeliveryInfPageComponent} from "./features/feature-profile/pages/delivery-inf-page/delivery-inf-page.component";

const routes: Routes = [
  {
    path: 'main_page',
    component: MainPageComponent
  },
  {
    path: 'profile_page',
    component: ProfilePageComponent
  },
  {
    path: 'search_bar_page',
    component: SearchBarPageComponent
  },
  {
    path: 'order_card_page',
    component: OrderCardPageComponent
  },
  {
    path: 'points_card_page',
    component: PointsCardPageComponent
  },
  {
    path: 'friends_card_page',
    component: FriendsCardPageComponent
  },
  {
    path: 'delivery_inf_page',
    component: DeliveryInfPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
