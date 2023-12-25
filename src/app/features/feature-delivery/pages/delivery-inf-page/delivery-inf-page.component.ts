import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {TelegramMainButtonModel} from "../../../../shared/models/telegram-ui/telegram-main-button.model";
import {DeliveryOptionStateService} from "../../services/delivery-option-state.service";
import {DeliveryIconService} from "../../services/delivery-icon.service";
import {Subscription} from "rxjs";
import {DeliveryDataService} from "../../services/delivery-data.service";

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
    private readonly deliveryDataService: DeliveryDataService
  ) {
    this.deliveryOptionsState$ = this.deliveryOptionsState.getState().subscribe(item => {
      item.forEach(item => {
        this.buttonOption = item.option
        this.frameState = item.isSelected
      })
    })
    this.deliveryData$ = this.deliveryDataService.getDeliveryData().subscribe(data => {
      this.city = data.city
      if (this.city !== "") {
        this.cityDataState = false
      }
      this.address = data.personalAddress
      if (this.address !== "") {
        this.addressDataState = false
      }
    })
  }

  ngOnInit() {
    this.telegramMainButton.showMainButton("Сохранить")
  }

  ngOnDestroy() {
    this.deliveryOptionsState$.unsubscribe()
    this.telegramMainButton.hideMainButton()
    this.deliveryData$.unsubscribe()
  }
}
