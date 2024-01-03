import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {DeliveryOptionStateService} from "../../../feature-delivery/services/delivery-option-state.service";
import {AppRoutesService} from "../../../../shared/services/app-routes.service";
import {Subscription} from "rxjs";
import {DeliveryDataService} from "../../../feature-delivery/services/delivery-data.service";
import {LocalStorageDataCheckService} from "../../../feature-delivery/services/local-storage-data-check.service";
import {LocalStorageKeysService} from "../../../../shared/services/local-storage-keys.service";
import {LocalStorageService} from "../../../../local-storage.service";

@Component({
  selector: 'app-profile-delivery-inf',
  templateUrl: './profile-delivery-inf.component.html',
  styleUrls: ['./profile-delivery-inf.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileDeliveryInfComponent {
  protected buttonOption: number
  protected city: string
  protected address: string
  protected fullName: string
  protected phoneNumber: string
  protected deliveryInfPageRoute: string
  protected deliveryData$: Subscription
  private readonly nameKey: string = this.localStorageKeyService.PERSONAL_FULL_NAME_KEY
  private readonly phoneKey: string = this.localStorageKeyService.PERSONAL_PHONE_NUMBER_KEY
  private readonly addressKey: string = this.localStorageKeyService.DELIVERY_ADDRESS_KEY
  private readonly cityKey: string = this.localStorageKeyService.DELIVERY_CITY_KEY

  constructor(
    private router: Router,
    private appRoutesService: AppRoutesService,
    private readonly deliveryDataService: DeliveryDataService,
    private readonly deliveryOptionsState: DeliveryOptionStateService,
    private readonly localStorageDataCheckService: LocalStorageDataCheckService,
    private readonly localStorageService: LocalStorageService,
    private readonly localStorageKeyService: LocalStorageKeysService
  ) {
    this.deliveryOptionsState.getState().subscribe(item => {
      item.forEach(item => {
        this.buttonOption = item.option
      })
    })
    this.deliveryData$ = this.deliveryDataService.getDeliveryData().subscribe(data => {
      this.fullName = this.localStorageDataCheckService.checkData(data.fullName, this.nameKey)
      if (this.fullName === "") {
        this.fullName = "Не указан"
      }
      this.phoneNumber = this.localStorageDataCheckService.checkData(data.phoneNumber, this.phoneKey)
      if (this.phoneNumber === "") {
        this.phoneNumber = "Не указан"
      }
      this.city = this.localStorageService.getItem(this.cityKey)
      if (this.city === "" || this.city === null) {
        this.city = "Не указан"
      }
      this.address = this.localStorageService.getItem(this.addressKey)
      if (this.address === "" || this.address === null) {
        this.address = "Не указан"
      }
    })
    this.deliveryInfPageRoute = this.appRoutesService.getRoutes().deliveryInfPage
  }

  onClick() {
    this.router.navigate([this.deliveryInfPageRoute])
  }
}
