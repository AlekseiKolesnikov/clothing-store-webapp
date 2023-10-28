import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfilePageComponent} from "./features/feature-profile/pages/profile-page.component";
import {MainPageComponent} from "./core/page/main-page.component";
import {SearchBarPageComponent} from "./features/feature-search-bar/pages/search-bar-page.component";
import {OrderCardPageComponent} from "./features/feature-order-card/pages/order-card-page.component";

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
    path: 'order_widget_page',
    component: OrderCardPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
