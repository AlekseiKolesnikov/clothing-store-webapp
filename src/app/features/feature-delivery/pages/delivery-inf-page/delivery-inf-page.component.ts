import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {TelegramMainButtonModel} from "../../../../shared/models/telegram-ui/telegram-main-button.model";
import {DeliveryOptionStateService} from "../../services/delivery-option-state.service";
import {DeliveryIconService} from "../../services/delivery-icon.service";

@Component({
  selector: 'app-delivery-inf-page',
  templateUrl: './delivery-inf-page.component.html',
  styleUrls: ['./delivery-inf-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DeliveryInfPageComponent implements OnInit, OnDestroy {
  protected buttonOption: number
  protected frameState: boolean
  protected deliveryIconData = this.deliveryIconDataService.getData()

  constructor(
    private readonly telegramMainButton: TelegramMainButtonModel,
    private readonly deliveryIconDataService: DeliveryIconService,
    private readonly deliveryOptionsState: DeliveryOptionStateService
  ) {
    this.deliveryOptionsState.getState().subscribe(item => {
      item.forEach(item => {
        this.buttonOption = item.option
        this.frameState = item.isSelected
      })
    })
  }

  ngOnInit() {
    this.telegramMainButton.showMainButton("Сохранить")
  }

  ngOnDestroy() {
    this.telegramMainButton.hideMainButton()
  }
}
