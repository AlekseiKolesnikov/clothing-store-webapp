import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {AppRoutesService} from "../../../../shared/services/app-routes.service";

@Component({
  selector: 'app-delivery-input',
  templateUrl: './delivery-input.component.html',
  styleUrls: ['./delivery-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DeliveryInputComponent {
  @Input() label: string

  protected distributionPointsPage: string
  constructor(
    private router: Router,
    private appRoutesService: AppRoutesService
  ) {
    this.distributionPointsPage = this.appRoutesService.getRoutes().distributionPointsPage
  }

  onClick() {
    this.router.navigate([this.distributionPointsPage])
  }
}
