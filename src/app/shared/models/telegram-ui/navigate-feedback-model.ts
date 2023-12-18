import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigateFeedbackModel {
  constructor(
    private router: Router
  ) {
  }
  feedbackNavigate(route: string) {
    // @ts-ignore
    Telegram.WebApp.HapticFeedback.notificationOccurred("success")
    this.router.navigate([route])
  }
}
