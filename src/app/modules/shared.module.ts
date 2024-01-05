import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from "../shared/components/button/button.component";
import {TruncatePipe} from "../shared/pipes/truncate.pipe";
import {CopyTextDirective} from "../shared/directives /copy-text.directive";
import {LoaderCircleComponent} from "../shared/components/loader-circle/loader-circle.component";

@NgModule({
  declarations: [
    ButtonComponent,
    TruncatePipe,
    CopyTextDirective,
    LoaderCircleComponent
  ],
  exports: [
    ButtonComponent,
    TruncatePipe,
    CopyTextDirective,
    LoaderCircleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
