import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {AppRoutesService} from "../../../../shared/services/app-routes.service";
import {Subscription} from "rxjs";
import {DeliveryDataService} from "../../../feature-delivery/services/delivery-data.service";
import {LocalStorageDataCheckService} from "../../../feature-delivery/services/local-storage-data-check.service";
import {
  DELIVERY_ADDRESS_KEY,
  DELIVERY_CITY_KEY, DELIVERY_OPTION,
  PERSONAL_FULL_NAME_KEY,
  PERSONAL_PHONE_NUMBER_KEY
} from "../../../../shared/data/local-storage-keys";
import {LocalStorageService} from "../../../../local-storage.service";

@Component({
  selector: 'app-profile-delivery-inf',
  templateUrl: './profile-delivery-inf.component.html',
  styleUrls: ['./profile-delivery-inf.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileDeliveryInfComponent {
  protected buttonOption: number = this.localStorageService.getItem(DELIVERY_OPTION)
  protected city: string
  protected address: string
  protected fullName: string
  protected phoneNumber: string
  protected deliveryInfPageRoute: string
  protected deliveryData$: Subscription
  private readonly defaultInputValue: string = "Не указан"

  constructor(
    private router: Router,
    private appRoutesService: AppRoutesService,
    private readonly deliveryDataService: DeliveryDataService,
    private readonly localStorageService: LocalStorageService,
    private readonly localStorageDataCheckService: LocalStorageDataCheckService
  ) {
    this.deliveryData$ = this.deliveryDataService.getDeliveryData().subscribe(data => {
      this.fullName = this.localStorageDataCheckService
        .checkDefaultValue(data.fullName, this.defaultInputValue, PERSONAL_FULL_NAME_KEY)
      this.phoneNumber = this.localStorageDataCheckService
        .checkDefaultValue(data.phoneNumber, this.defaultInputValue, PERSONAL_PHONE_NUMBER_KEY)
      this.city = this.localStorageDataCheckService
        .checkDefaultValue(data.city, this.defaultInputValue, DELIVERY_CITY_KEY)
      this.address = this.localStorageDataCheckService
        .checkDefaultValue(data.address, this.defaultInputValue, DELIVERY_ADDRESS_KEY)
    })
    this.deliveryInfPageRoute = this.appRoutesService.getRoutes().deliveryInfPage
  }

  onClick() {
    this.router.navigate([this.deliveryInfPageRoute])
  }
}
