import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TelegramMainButtonModel {
  showMainButton(text: string) {
    // @ts-ignore
    Telegram.WebApp.MainButton.setText(text)
    // @ts-ignore
    Telegram.WebApp.MainButton.show();
    // @ts-ignore
    Telegram.WebApp.onEvent("mainButtonClicked")
  }

  hideMainButton() {
    // @ts-ignore
    Telegram.WebApp.MainButton.hide();
  }
}
