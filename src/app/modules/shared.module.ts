import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from "../shared/components/button/button.component";
import {TruncatePipe} from "../shared/pipes/truncate.pipe";
import {CopyTextDirective} from "../shared/directives /copy-text.directive";
import {LoaderComponent} from "../shared/components/loader/loader.component";
import {ArticlesComponent} from "../core/components/articles/articles.component";
import {ArticleCardComponent} from "../features/feature-article-card/components/article-card/article-card.component";
import {CheckboxComponent} from "../shared/components/checkbox/checkbox.component";

@NgModule({
  declarations: [
    ButtonComponent,
    TruncatePipe,
    CopyTextDirective,
    LoaderComponent,
    CheckboxComponent,
    ArticlesComponent,
    ArticleCardComponent
  ],
  exports: [
    ButtonComponent,
    TruncatePipe,
    CopyTextDirective,
    LoaderComponent,
    ArticlesComponent,
    CheckboxComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
