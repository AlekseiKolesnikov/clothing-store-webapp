import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from "../../components/button/button.component";
import {DataFormComponent} from "../../components/data-form/data-form.component";
import {TruncatePipe} from "../../pipes/truncate.pipe";

@NgModule({
  declarations: [
    ButtonComponent,
    DataFormComponent,
    TruncatePipe
  ],
  exports: [
    DataFormComponent,
    ButtonComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
