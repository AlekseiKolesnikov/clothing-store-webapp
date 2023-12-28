import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {DeliveryOptionStateService} from "../../../feature-delivery/services/delivery-option-state.service";
import {AppRoutesService} from "../../../../shared/services/app-routes.service";
import {Subscription} from "rxjs";
import {DeliveryDataService} from "../../../feature-delivery/services/delivery-data.service";
import {LocalStorageDataCheckService} from "../../../feature-delivery/services/local-storage-data-check.service";
import {LocalStorageKeysService} from "../../../../shared/services/local-storage-keys.service";

@Component({
  selector: 'app-profile-delivery-inf',
  templateUrl: './profile-delivery-inf.component.html',
  styleUrls: ['./profile-delivery-inf.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileDeliveryInfComponent {
  protected buttonOption: number
  protected city: string = "Не указан"
  protected address: string = "Не указан"
  protected fullName: string = "Не указан"
  protected phoneNumber: string = "Не указан"
  protected deliveryInfPageRoute: string
  protected deliveryData$: Subscription

  constructor(
    private router: Router,
    private appRoutesService: AppRoutesService,
    private readonly deliveryDataService: DeliveryDataService,
    private readonly deliveryOptionsState: DeliveryOptionStateService,
    private readonly localStorageDataCheckService: LocalStorageDataCheckService,
    private readonly localStorageKeyService: LocalStorageKeysService
  ) {
    this.deliveryOptionsState.getState().subscribe(item => {
      item.forEach(item => {
        this.buttonOption = item.option
      })
    })
    this.deliveryData$ = this.deliveryDataService.getDeliveryData().subscribe(data => {
      this.city = this.localStorageDataCheckService
        .checkData(data.city, this.localStorageKeyService.DELIVERY_CITY_KEY)
      this.address = this.localStorageDataCheckService
        .checkData(data.address, this.localStorageKeyService.DELIVERY_ADDRESS_KEY)
    })
    this.deliveryInfPageRoute = this.appRoutesService.getRoutes().deliveryInfPage
  }

  onClick() {
    this.router.navigate([this.deliveryInfPageRoute])
  }
}
