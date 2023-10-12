import {Injectable, NgZone} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
      providedIn: 'root'
})
export class TelegramMainButton {
      constructor(
            private router: Router,
            private zone: NgZone
      ) {
      }

      activateMainButton(text: string) {
            // @ts-ignore
            Telegram.WebApp.MainButton.show();
            // @ts-ignore
            Telegram.WebApp.MainButton.setText(text)
            // @ts-ignore
            Telegram.WebApp.onEvent("mainButtonClicked", () => {
                  this.zone.run(() => {
                        this.router.navigate(['main-page']);
                  })
                  // @ts-ignore
                  Telegram.WebApp.MainButton.hide();
            })
      }
}
