import {Component, ViewEncapsulation} from '@angular/core';
import {deliveryInformationData} from "../../data/delivery-information.data";
import {Router} from "@angular/router";
import {appRoutes} from "../../../../shared/data/app-routes";
import {DeliveryOptionStateService} from "../../../feature-delivery/service/delivery-option-state.service";

@Component({
  selector: 'app-profile-delivery-inf',
  templateUrl: './profile-delivery-inf.component.html',
  styleUrls: ['./profile-delivery-inf.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileDeliveryInfComponent {
  protected buttonOption: string = ""
  protected readonly deliveryInformationData = deliveryInformationData;

  constructor(
    private router: Router,
    protected readonly deliveryOptionsState: DeliveryOptionStateService
  ) {
    this.deliveryOptionsState.getState().subscribe(option => {
      this.buttonOption = option
    })
  }

  onClick() {
    this.router.navigate([appRoutes.deliveryInfPage])
  }
}
