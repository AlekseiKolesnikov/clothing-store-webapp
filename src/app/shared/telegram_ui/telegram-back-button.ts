import {Injectable} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {Location} from "@angular/common";
import {filter} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TelegramBackButton {
  protected currentRoute: string;

  constructor(
    private router: Router,
    private location: Location
  ) {
  }

  useDirection() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        this.currentRoute = (event as NavigationEnd).url;
        if (this.currentRoute === '/main-page') {
          // @ts-ignore
          Telegram.WebApp.BackButton.hide()
        } else {
          // @ts-ignore
          Telegram.WebApp.MainButton.hide();
          // @ts-ignore
          Telegram.WebApp.BackButton.show()
          // @ts-ignore
          Telegram.WebApp.BackButton.onClick(() => {
            this.location.back()
          })
        }
      })
  }
}
