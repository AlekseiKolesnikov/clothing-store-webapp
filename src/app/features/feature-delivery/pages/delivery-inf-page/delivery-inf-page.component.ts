import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TelegramMainButton} from "../../../../shared/telegram_ui/telegram-main-button";
import {deliveryIconData} from "../../data/delivery-icon.data";
import {DeliveryOptionStateService} from "../../service/delivery-option-state.service";

@Component({
  selector: 'app-d',
  templateUrl: './delivery-inf-page.component.html',
  styleUrls: ['./delivery-inf-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DeliveryInfPageComponent implements OnInit{
  protected buttonOption: string = "address"

  constructor(
    private readonly telegramMainButton: TelegramMainButton,
    protected readonly deliveryOptionsState: DeliveryOptionStateService
  ) {
    this.deliveryOptionsState.getState().subscribe(option => {
      this.buttonOption = option
    })
  }

  ngOnInit() {
    this.telegramMainButton.activateMainButton("Сохранить")
  }

  protected readonly deliveryIconData = deliveryIconData;
}
