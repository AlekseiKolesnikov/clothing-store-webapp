import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {LocalStorageService} from "./local-storage.service";
import {SharedModule} from './shared/modules/shared-module/shared.module';
import {MainPageModule} from "./core/modules/main-page.module";
import {ActionCardsModule} from "./core/modules/action-cards.module";
import {HeaderModule} from "./core/modules/header.module";
import {SearchBarModule} from "./core/modules/search-bar.module";
import {ArticlesModule} from "./core/modules/articles.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule,
    SharedModule,
    MainPageModule,
    ActionCardsModule,
    ArticlesModule,
    HeaderModule,
    SearchBarModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
