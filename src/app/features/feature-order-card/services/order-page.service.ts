import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class OrderPageService {
  private readonly orderPageData = {
    fullArrowIcon: 'assets/images/ui-icons/full-arrow-right.svg',
    shortArrowIcon: 'assets/images/ui-icons/short-right-arrow.svg',
    blackTelegramIcon: 'assets/images/order-card-icons/black-telegram-icon.svg',
    sneakerIcon: 'assets/images/order-card-icons/sneaker-icon.svg',
    supportMessageIcon: 'assets/images/order-card-icons/support-message-icon.svg',
    calculatorIcon: 'assets/images/order-card-icons/calculator-icon.svg',
    yellowColor: '#ECEF67FF',
    pinkColor: '#F3A9E7FF'
  }

  getData() {
    return this.orderPageData
  }
}
