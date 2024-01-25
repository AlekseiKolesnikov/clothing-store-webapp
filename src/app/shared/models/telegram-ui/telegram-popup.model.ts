import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TelegramPopupModel {
  constructor() { }

  showPopup(text: string) {
    // @ts-ignore
    Telegram.WebApp.showPopup({
      title: "Error",
      message: text,
      buttons: [{
        type: "ok"
      }]
    })
  }
}
