import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {TelegramBackButton} from "./shared/telegram_ui/telegram-back-button";
import {InitializeMainData} from "./initialize-main-data";

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
    private telegramBackButton: TelegramBackButton,
    private initializeMainData: InitializeMainData
  ) {
    this.telegramBackButton.useDirection()
    this.initializeMainData.initialize()
  }

  ngOnInit() {
    this.router.navigate(['main-page'])
  }
}


