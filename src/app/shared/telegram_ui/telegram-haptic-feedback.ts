import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TelegramHapticFeedback {
  hapticFeedBack() {
    // @ts-ignore
    Telegram.WebApp.HapticFeedback.notificationOccurred("success")
  }
}
