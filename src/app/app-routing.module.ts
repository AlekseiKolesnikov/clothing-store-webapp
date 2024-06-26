import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfilePageComponent} from "./features/feature-profile/pages/profile-page/profile-page.component";
import {MainPageComponent} from "./core/page/main-page.component";
import {SearchBarPageComponent} from "./features/feature-search-bar/pages/search-bar-page.component";
import {OrderCardPageComponent} from "./features/feature-order-card/pages/order-card-page.component";
import {PointsCardPageComponent} from "./features/feature-points-card/pages/points-card-page.component";
import {FriendsCardPageComponent} from "./features/feature-friends-card/pages/friends-card-page.component";
import {DeliveryInfPageComponent} from "./features/feature-delivery/pages/delivery-inf-page/delivery-inf-page.component";
import {
  DistributionPointsPageComponent
} from "./features/feature-delivery/pages/distribution-points-page/distribution-points-page.component";
import {
  DistributionAddressPageComponent
} from "./features/feature-delivery/pages/distribution-address-page/distribution-address-page.component";
import {ProductPageComponent} from "./features/feature-products/pages/product-page/product-page.component";
import {SizeTablePageComponent} from "./features/feature-products/pages/size-table-page/size-table-page.component";
import {
  ProductFilterPageComponent
} from "./features/feature-products-filter/page/product-filter-page/product-filter-page.component";
import {
  FilteredProductListPageComponent
} from "./features/feature-products-filter/page/filtered-product-list-page/filtered-product-list-page.component";

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
  },
  {
    path: 'distribution_city_page',
    component: DistributionPointsPageComponent
  },
  {
    path: 'distribution_address_page',
    component: DistributionAddressPageComponent
  },
  {
    path: 'product_page',
    component: ProductPageComponent
  },
  {
    path: 'size_table_page',
    component: SizeTablePageComponent
  },
  {
    path: 'product_filter_page',
    component: ProductFilterPageComponent
  },
  {
    path: 'filtered_products_page',
    component: FilteredProductListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
