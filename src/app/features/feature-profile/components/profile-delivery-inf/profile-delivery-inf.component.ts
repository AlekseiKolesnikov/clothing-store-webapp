import {Component, ViewEncapsulation} from '@angular/core';
import {deliveryInformationData} from "../../data/delivery-information.data";
import {Router} from "@angular/router";
import {DeliveryOptionStateService} from "../../../feature-delivery/services/delivery-option-state.service";
import {AppRoutesService} from "../../../../shared/services/app-routes.service";

@Component({
  selector: 'app-profile-delivery-inf',
  templateUrl: './profile-delivery-inf.component.html',
  styleUrls: ['./profile-delivery-inf.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileDeliveryInfComponent {
  protected buttonOption: number
  protected readonly deliveryInformationData = deliveryInformationData;
  protected deliveryInfPageRoute: string

  constructor(
    private router: Router,
    private appRoutesService: AppRoutesService,
    protected readonly deliveryOptionsState: DeliveryOptionStateService
  ) {
    this.deliveryOptionsState.getState().subscribe(item => {
      item.forEach(item => {
        this.buttonOption = item.option
      })
    })
    this.deliveryInfPageRoute = this.appRoutesService.getRoutes().deliveryInfPage
  }

  onClick() {
    this.router.navigate([this.deliveryInfPageRoute])
  }
}
