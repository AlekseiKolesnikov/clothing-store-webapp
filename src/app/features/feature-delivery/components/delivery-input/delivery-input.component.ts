import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-delivery-input',
  templateUrl: './delivery-input.component.html',
  styleUrls: ['./delivery-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DeliveryInputComponent {
  @Input() label: string
  @Input() data: string
  @Input() dataIsEmpty: boolean
  @Input() route: string

  constructor(
    private router: Router
  ) {
  }

  onClick() {
    this.router.navigate([this.route])
  }
}
