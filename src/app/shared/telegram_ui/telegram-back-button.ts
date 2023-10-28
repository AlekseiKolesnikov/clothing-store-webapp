import {Injectable} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {Location} from "@angular/common";
import {filter} from "rxjs";
import {appRoutes} from "../data/app-routes";

@Injectable({
  providedIn: 'root'
})
export class TelegramBackButton {
  protected currentRoute: string;

  constructor(
    private router: Router,
    private location: Location
  ) {
    // @ts-ignore
    Telegram.WebApp.BackButton.onClick(() => {
      this.location.back()
    })
  }

  useDirection() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        this.currentRoute = (event as NavigationEnd).url;
        if (this.currentRoute === `/${appRoutes.mainPage}`) {
          // @ts-ignore
          Telegram.WebApp.BackButton.hide()
        } else {
          // @ts-ignore
          Telegram.WebApp.MainButton.hide();
          // @ts-ignore
          Telegram.WebApp.BackButton.show();
        }
      })
  }
}
