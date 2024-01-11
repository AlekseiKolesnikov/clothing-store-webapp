import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from "../shared/components/button/button.component";
import {TruncatePipe} from "../shared/pipes/truncate.pipe";
import {CopyTextDirective} from "../shared/directives /copy-text.directive";
import {LoaderComponent} from "../shared/components/loader/loader.component";

@NgModule({
  declarations: [
    ButtonComponent,
    TruncatePipe,
    CopyTextDirective,
    LoaderComponent
  ],
  exports: [
    ButtonComponent,
    TruncatePipe,
    CopyTextDirective,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
