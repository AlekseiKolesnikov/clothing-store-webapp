import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {TelegramBackButtonModel} from "./shared/models/telegram-ui/telegram-back-button.model";
import {InitializeMainData} from "./initialize-main-data";
import {AppRoutesService} from "./shared/services/app-routes.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  protected title = 'clothing-store';
  protected mainPageRoute: string

  constructor(
    private router: Router,
    private telegramBackButton: TelegramBackButtonModel,
    private initializeMainData: InitializeMainData,
    private appRoutesService: AppRoutesService
  ) {
    this.mainPageRoute = this.appRoutesService.getRoutes().mainPage
    this.telegramBackButton.useDirection()
    this.initializeMainData.initialize()
  }

  ngOnInit() {
    this.router.navigate([this.mainPageRoute])
  }
}


