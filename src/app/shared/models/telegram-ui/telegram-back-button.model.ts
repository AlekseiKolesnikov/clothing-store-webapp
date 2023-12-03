import {Injectable} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {Location} from "@angular/common";
import {filter} from "rxjs";
import {AppRoutesService} from "../../services/app-routes.service";

@Injectable({
  providedIn: 'root'
})
export class TelegramBackButtonModel {
  protected currentRoute: string;
  protected mainPageRoute: string

  constructor(
    private router: Router,
    private location: Location,
    private appRoutesService: AppRoutesService
  ) {
    // @ts-ignore
    Telegram.WebApp.BackButton.onClick(() => {
      this.location.back()
    })
    this.mainPageRoute = this.appRoutesService.getRoutes().mainPage
  }

  useDirection() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        this.currentRoute = (event as NavigationEnd).url;
        if (this.currentRoute === `/${this.mainPageRoute}`) {
          // @ts-ignore
          Telegram.WebApp.BackButton.hide();
        } else {
          // @ts-ignore
          Telegram.WebApp.BackButton.show();
        }
      })
  }
}
