import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from "../shared/components/button/button.component";
import {DataFormComponent} from "../shared/components/data-form/data-form.component";
import {TruncatePipe} from "../shared/pipes/truncate.pipe";
import {CopyTextDirective} from "../shared/directives /copy-text.directive";
import {LoaderCircleComponent} from "../shared/components/loader-circle/loader-circle.component";

@NgModule({
  declarations: [
    ButtonComponent,
    DataFormComponent,
    TruncatePipe,
    CopyTextDirective,
    LoaderCircleComponent
  ],
  exports: [
    DataFormComponent,
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
