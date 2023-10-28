import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPageComponent} from "../page/main-page.component";
import {HeaderComponent} from "../components/header/header.component";
import {SearchBarComponent} from "../components/search-bar/search-bar.component";
import {ArticlesComponent} from "../components/articles/articles.component";
import {
  ActionCardsComponent
} from "../components/action-cards/action-cards.component";
import {SearchBarModule} from "./search-bar.module";
import {HeaderModule} from "./header.module";
import {ArticlesModule} from "./articles.module";
import {ActionCardsModule} from "./action-cards.module";

@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent,
    SearchBarComponent,
    ArticlesComponent,
    ActionCardsComponent
  ],
  imports: [
    CommonModule,
    SearchBarModule,
    HeaderModule,
    ArticlesModule,
    ActionCardsModule,
  ]
})
export class MainPageModule { }
