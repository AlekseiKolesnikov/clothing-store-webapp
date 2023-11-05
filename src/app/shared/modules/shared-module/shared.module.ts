import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from "../../components/button/button.component";
import {DataFormComponent} from "../../components/data-form/data-form.component";
import {TruncatePipe} from "../../pipes/truncate.pipe";
import {CopyTextDirective} from "../../directives /copy-text.directive";

@NgModule({
  declarations: [
    ButtonComponent,
    DataFormComponent,
    TruncatePipe,
    CopyTextDirective
  ],
  exports: [
    DataFormComponent,
    ButtonComponent,
    TruncatePipe,
    CopyTextDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
