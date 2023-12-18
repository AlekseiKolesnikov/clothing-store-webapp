import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SearchBarWidgetComponent
} from "../features/feature-search-bar/components/search-bar-widget/search-bar-widget.component";
import {SearchBarPageComponent} from "../features/feature-search-bar/pages/search-bar-page.component";

@NgModule({
  declarations: [
    SearchBarWidgetComponent,
    SearchBarPageComponent,
  ],
  exports: [
    SearchBarWidgetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SearchBarModule { }
