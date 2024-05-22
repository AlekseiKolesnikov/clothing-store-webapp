import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class TelegramMainButtonModel {
  private mainButtonPostEventMessage: string
  private readonly setDataLocalStorage = () => {
    postMessage(this.mainButtonPostEventMessage, "*")
  }

  showMainButton(text: string, mainButtonPostEventMessage: string) {
    this.mainButtonPostEventMessage = mainButtonPostEventMessage
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
