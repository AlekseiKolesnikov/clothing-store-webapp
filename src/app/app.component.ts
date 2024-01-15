import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {TelegramBackButtonModel} from "./shared/models/telegram-ui/telegram-back-button.model";
import {InitializeMainData} from "./initialize-main-data";
import {MAIN_PAGE} from "./shared/data/app-routes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'clothing-store';
  constructor(
    private router: Router,
    private telegramBackButton: TelegramBackButtonModel,
    private initializeMainData: InitializeMainData
  ) {
    this.telegramBackButton.useDirection()
    this.initializeMainData.initialize()
  }

  ngOnInit() {
    this.router.navigate([MAIN_PAGE])
  }
}


