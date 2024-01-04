import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {TelegramMainButtonModel} from "../../../../shared/models/telegram-ui/telegram-main-button.model";
import {DeliveryOptionStateService} from "../../services/delivery-option-state.service";
import {DeliveryIconService} from "../../services/delivery-icon.service";
import {Subscription} from "rxjs";
import {DeliveryDataService} from "../../services/delivery-data.service";
import {DataLocalStoreService} from "../../services/data-local-store.service";
import {LocalStorageDataCheckService} from "../../services/local-storage-data-check.service";
import {DELIVERY_ADDRESS_KEY, DELIVERY_CITY_KEY} from "../../../../shared/data/local-storage-keys";

@Component({
  selector: 'app-delivery-inf-page',
  templateUrl: './delivery-inf-page.component.html',
  styleUrls: ['./delivery-inf-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DeliveryInfPageComponent implements OnInit, OnDestroy {
  protected buttonOption: number
  protected cityDataState: boolean = true
  protected addressDataState: boolean = true
  protected frameState: boolean
  protected city: string
  protected address: string
  protected deliveryIconData = this.deliveryIconDataService.getData()
  protected deliveryOptionsState$: Subscription
  protected deliveryData$: Subscription

  constructor(
    private readonly telegramMainButton: TelegramMainButtonModel,
    private readonly deliveryIconDataService: DeliveryIconService,
    private readonly deliveryOptionsState: DeliveryOptionStateService,
    private readonly dataLocalStoreService: DataLocalStoreService,
    private readonly deliveryDataService: DeliveryDataService,
    private readonly localStorageDataCheckService: LocalStorageDataCheckService,
  ) {
    this.deliveryOptionsState$ = this.deliveryOptionsState.getState().subscribe(item => {
      item.forEach(item => {
        this.buttonOption = item.option
        this.frameState = item.isSelected
      })
    })
    this.deliveryData$ = this.deliveryDataService.getDeliveryData().subscribe(data => {
      this.city = this.localStorageDataCheckService
        .checkDefaultValue(data.city, "", DELIVERY_CITY_KEY)
      if (this.city !== "") {
        this.cityDataState = false
      }
      this.address = this.localStorageDataCheckService
        .checkDefaultValue(data.address, "", DELIVERY_ADDRESS_KEY)
      if (this.address !== "") {
        this.addressDataState = false
      }
    })
  }

  ngOnInit() {
    this.telegramMainButton.showMainButton("Сохранить")
    this.dataLocalStoreService.subscribe()
    window.addEventListener(
      "message",
      (event) => {
        if (event.data === "setData") {
          this.dataLocalStoreService.storeData()
        }
      }
    )
  }

  ngOnDestroy() {
    this.deliveryData$.unsubscribe()
    this.deliveryOptionsState$.unsubscribe()
    this.dataLocalStoreService.unsubscribe()
    this.telegramMainButton.hideMainButton()
  }
}
