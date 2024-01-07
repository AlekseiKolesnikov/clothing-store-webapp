import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {TelegramMainButtonModel} from "../../../../shared/models/telegram-ui/telegram-main-button.model";
import {DeliveryOptionStateService, IDeliveryOptions} from "../../services/delivery-option-state.service";
import {from, mergeMap, Subscription, tap} from "rxjs";
import {DeliveryDataService} from "../../services/delivery-data.service";
import {DataLocalStoreService} from "../../services/data-local-store.service";

@Component({
  selector: 'app-delivery-inf-page',
  templateUrl: './delivery-inf-page.component.html',
  styleUrls: ['./delivery-inf-page.component.scss'],
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
    private readonly deliveryDataService: DeliveryDataService
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
      this.city = data.city
      this.cityFieldIsEmpty()
      this.address = data.address
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
