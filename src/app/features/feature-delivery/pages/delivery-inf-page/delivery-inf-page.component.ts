import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {TelegramMainButtonModel} from "../../../../shared/models/telegram-ui/telegram-main-button.model";
import {DeliveryOptionStateService} from "../../services/delivery-option-state.service";
import {from, mergeMap, Subscription, tap} from "rxjs";
import {DeliveryDataService} from "../../services/delivery-data.service";
import {DataLocalStoreService} from "../../services/data-local-store.service";
import {LocalStorageDataCheckService} from "../../services/local-storage-data-check.service";
import {DELIVERY_ADDRESS_KEY, DELIVERY_CITY_KEY} from "../../../../shared/data/local-storage-keys";
import {IDeliveryOptions} from "../../../../shared/interfaces/delivery-interfaces";
export const MAIN_BUTTON_DELIVERY_POST_EVENT_LISTENER = "setData"
@Component({
  selector: 'app-delivery-inf-page',
  templateUrl: './delivery-inf-page.component.html',
  styleUrls: [
    './delivery-inf-page.component.scss',
    './../../../../core/page/main-page.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class DeliveryInfPageComponent implements OnInit, OnDestroy {
  protected buttonOption: number
  protected city: string
  protected address: string
  protected deliveryIconData: Array<IDeliveryOptions>
  protected deliveryOptionsState$: Subscription
  protected deliveryData$: Subscription

  constructor(
    private readonly telegramMainButton: TelegramMainButtonModel,
    private readonly deliveryOptionsState: DeliveryOptionStateService,
    private readonly dataLocalStoreService: DataLocalStoreService,
    private readonly deliveryDataService: DeliveryDataService,
    private readonly localStorageDataCheckService: LocalStorageDataCheckService
  ) {
    this.deliveryOptionsState$ = this.deliveryOptionsState.getState().pipe(
      tap(data => {
        this.deliveryIconData = data
      }),
      mergeMap((item) => from(item)),
      tap(value => {
        if (value.isSelected) {
          this.buttonOption = value.option
        }
      })
    ).subscribe()
    this.deliveryData$ = this.deliveryDataService.getDeliveryData().subscribe(data => {
      this.city = this.localStorageDataCheckService
        .checkDefaultValue(data.city, "", DELIVERY_CITY_KEY)
      this.cityFieldIsEmpty()
      this.address = this.localStorageDataCheckService
        .checkDefaultValue(data.address, "", DELIVERY_ADDRESS_KEY)
      this.addressFieldIsEmpty()
    })
  }

  ngOnInit() {
    this.telegramMainButton.showMainButton("Save", MAIN_BUTTON_DELIVERY_POST_EVENT_LISTENER)
    this.dataLocalStoreService.subscribe()
    window.addEventListener(
      "message",
      (event) => {
        if (event.data === MAIN_BUTTON_DELIVERY_POST_EVENT_LISTENER) {
          this.dataLocalStoreService.storeData()
        }
      }
    )
  }

  ngOnDestroy() {
    this.deliveryOptionsState$.unsubscribe()
    this.dataLocalStoreService.unsubscribe()
    this.telegramMainButton.hideMainButton()
  }

  protected cityFieldIsEmpty = () => {
    return this.city === ""
  }

  protected addressFieldIsEmpty = () => {
    return this.address === ""
  }
}
