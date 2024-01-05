import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TelegramMainButtonModel {
  private readonly setDataLocalStorage = () => {
    postMessage("setData", "*")
  }

  showMainButton(text: string) {
    // @ts-ignore
    Telegram.WebApp.MainButton.setText(text)
    // @ts-ignore
    Telegram.WebApp.MainButton.show();
    // @ts-ignore
    Telegram.WebApp.MainButton.onClick(this.setDataLocalStorage)
  }

  hideMainButton() {
    // @ts-ignore
    Telegram.WebApp.MainButton.hide();
  }
}
