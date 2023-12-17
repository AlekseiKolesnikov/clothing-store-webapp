import {Component} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {GoogleMapsApiService} from "../../services/google-maps-api.service";

@Component({
  selector: 'app-distribution-address-page',
  templateUrl: './distribution-address-page.component.html',
  styleUrls: ['./distribution-address-page.component.scss']
})
export class DistributionAddressPageComponent extends BaseComponent{
  protected address: string
  protected addressesArray: string[] = []
  constructor(
    private readonly googleMapsApiService: GoogleMapsApiService
  ) {
    super();
    this.googleMapsApiService.getAddress().subscribe((data: any) => {
      console.log(data);
    })
  }

  updateList() {
    this.googleMapsApiService.giveText(this.address)
  }

  onClick(address: string) {

  }
}
