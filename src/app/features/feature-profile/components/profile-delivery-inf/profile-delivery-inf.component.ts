import {Component, ViewEncapsulation} from '@angular/core';
import {deliveryInformationData} from "../../data/delivery-information.data";
import {Router} from "@angular/router";
import {appRoutes} from "../../../../shared/data/app-routes";

@Component({
  selector: 'app-profile-delivery-inf',
  templateUrl: './profile-delivery-inf.component.html',
  styleUrls: ['./profile-delivery-inf.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileDeliveryInfComponent {

  protected readonly deliveryInformationData = deliveryInformationData;

  constructor(
    private router: Router
  ) {
  }

  onClick() {
    this.router.navigate([appRoutes.deliveryInfPage])
  }
}
