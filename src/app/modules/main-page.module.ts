import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPageComponent} from "../core/page/main-page.component";
import {HeaderComponent} from "../core/components/header/header.component";
import {SearchBarComponent} from "../core/components/search-bar/search-bar.component";
import {
  ActionCardsComponent
} from "../core/components/action-cards/action-cards.component";
import {SearchBarModule} from "./search-bar.module";
import {HeaderModule} from "./header.module";
import {ActionCardsModule} from "./action-cards.module";
import {ProductModule} from "./product.module.ts.module";
import {SharedModule} from "./shared.module";

@NgModule({
    declarations: [
        MainPageComponent,
        HeaderComponent,
        SearchBarComponent,
        ActionCardsComponent
    ],
    imports: [
        CommonModule,
        SearchBarModule,
        HeaderModule,
        ActionCardsModule,
        ProductModule,
        SharedModule,
    ]
})
export class MainPageModule { }
