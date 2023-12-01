import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TelegramMainButtonModel {
  activateMainButton(text: string) {
    // @ts-ignore
    Telegram.WebApp.MainButton.setText(text)
    // @ts-ignore
    Telegram.WebApp.MainButton.show();
    // @ts-ignore
    Telegram.WebApp.onEvent("mainButtonClicked", () => {
      // @ts-ignore
      Telegram.WebApp.MainButton.hide();
    })
  }
}
