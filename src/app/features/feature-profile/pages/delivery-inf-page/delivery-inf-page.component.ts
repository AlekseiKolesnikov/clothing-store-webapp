import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TelegramMainButton} from "../../../../shared/telegram_ui/telegram-main-button";
import {deliveryIconData} from "../../data/delivery-icon.data";

@Component({
  selector: 'app-d',
  templateUrl: './delivery-inf-page.component.html',
  styleUrls: ['./delivery-inf-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DeliveryInfPageComponent implements OnInit{
  constructor(
    private readonly telegramMainButton: TelegramMainButton
  ) {
  }

  ngOnInit() {
    this.telegramMainButton.activateMainButton("Сохранить")
  }

  protected readonly deliveryIconData = deliveryIconData;
}
