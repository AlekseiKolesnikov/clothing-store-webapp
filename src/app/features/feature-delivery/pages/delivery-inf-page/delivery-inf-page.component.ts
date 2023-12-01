import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TelegramMainButtonModel} from "../../../../shared/models/telegram-ui/telegram-main-button.model";
import {DeliveryOptionStateService, IDeliveryOptions} from "../../services/delivery-option-state.service";
import {DeliveryIconService} from "../../services/delivery-icon.service";

@Component({
  selector: 'app-delivery-inf-page',
  templateUrl: './delivery-inf-page.component.html',
  styleUrls: ['./delivery-inf-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DeliveryInfPageComponent implements OnInit {
  protected buttonOption: number
  protected deliveryIconData: Array<IDeliveryOptions>

  constructor(
    private readonly telegramMainButton: TelegramMainButtonModel,
    deliveryIconDataService: DeliveryIconService,
    private readonly deliveryOptionsState: DeliveryOptionStateService
  ) {
    this.deliveryOptionsState.setupData(deliveryIconDataService.getData())
    this.deliveryOptionsState.getState().subscribe(item => {
       this.deliveryIconData = item
    })
  }

  ngOnInit() {
    this.telegramMainButton.activateMainButton("Сохранить")
  }
}
