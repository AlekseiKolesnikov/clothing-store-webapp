import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfilePageComponent} from "./features/feature-profile/pages/profile-page.component";
import {MainPageComponent} from "./core/page/main-page.component";
import {SearchBarPageComponent} from "./features/feature-search-bar/pages/search-bar-page.component";
import {OrderWidgetPageComponent} from "./features/feature-order-widget/pages/order-widget-page.component";

const routes: Routes = [
  {
    path: 'main-page',
    component: MainPageComponent
  },
  {
    path: 'profile-page',
    component: ProfilePageComponent
  },
  {
    path: 'search-bar-page',
    component: SearchBarPageComponent
  },
  {
    path: 'order-widget-page',
    component: OrderWidgetPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
