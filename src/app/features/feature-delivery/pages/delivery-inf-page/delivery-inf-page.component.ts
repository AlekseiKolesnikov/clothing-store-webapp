import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {TelegramMainButtonModel} from "../../../../shared/models/telegram-ui/telegram-main-button.model";
import {DeliveryOptionStateService} from "../../services/delivery-option-state.service";
import {DeliveryIconService} from "../../services/delivery-icon.service";
import {from, mergeMap, Subscription, tap} from "rxjs";
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
    this.deliveryOptionsState$ = this.deliveryOptionsState.getState().pipe(
      mergeMap((item) => from(item)),
      tap(value => {
        this.buttonOption = value.option
        this.frameState = value.isSelected
      })
    ).subscribe()
    this.deliveryData$ = this.deliveryDataService.getDeliveryData().subscribe(data => {
      this.city = data.city
      this.cityFieldIsEmpty()
      this.address = data.personalAddress
      this.addressFieldIsEmpty()
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

  protected cityFieldIsEmpty = () => {
    return this.city === ""
  }

  protected addressFieldIsEmpty = () => {
    return this.address === ""
  }
}
