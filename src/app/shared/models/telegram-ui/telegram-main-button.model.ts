import {Injectable} from "@angular/core";
export const MAIN_BUTTON_POST_EVENT_LISTENER = "setData"
@Injectable({
  providedIn: 'root'
})
export class TelegramMainButtonModel {
  private readonly setDataLocalStorage = () => {
    postMessage(MAIN_BUTTON_POST_EVENT_LISTENER, "*")
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
