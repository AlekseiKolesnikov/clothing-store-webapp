import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPageComponent} from "../core/page/main-page.component";
import {HeaderComponent} from "../core/components/header/header.component";
import {SearchBarComponent} from "../core/components/search-bar/search-bar.component";
import {ArticlesComponent} from "../core/components/articles/articles.component";
import {
  ActionCardsComponent
} from "../core/components/action-cards/action-cards.component";
import {SearchBarModule} from "./search-bar.module";
import {HeaderModule} from "./header.module";
import {ArticlesModule} from "./articles.module";
import {ActionCardsModule} from "./action-cards.module";
import {ProductModule} from "./product.module.ts.module";
import {SharedModule} from "./shared.module";

@NgModule({
    declarations: [
        MainPageComponent,
        HeaderComponent,
        SearchBarComponent,
        ArticlesComponent,
        ActionCardsComponent
    ],
    exports: [
        ArticlesComponent
    ],
    imports: [
        CommonModule,
        SearchBarModule,
        HeaderModule,
        ArticlesModule,
        ActionCardsModule,
        ProductModule,
        SharedModule,
    ]
})
export class MainPageModule { }
