import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AppRoutesService {
  private readonly appRoutes = {
    mainPage: 'main_page',
    profilePage: 'profile_page',
    searchPage: 'search_bar_page',
    orderCardPage: 'order_card_page',
    pointsCardPage: 'points_card_page',
    friendsCardPage: 'friends_card_page',
    deliveryInfPage: 'delivery_inf_page',
    distributionPointsPage: 'distribution_points_page',
    distributionAddressPage: "distribution_address_page",
    productPage: "product_page"
  }

  getRoutes() {
   return this.appRoutes
  }
}
