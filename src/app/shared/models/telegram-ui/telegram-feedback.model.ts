import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TelegramFeedbackModel {
  hapticFeedback() {
    // @ts-ignore
    Telegram.WebApp.HapticFeedback.notificationOccurred("success")
  }
}
