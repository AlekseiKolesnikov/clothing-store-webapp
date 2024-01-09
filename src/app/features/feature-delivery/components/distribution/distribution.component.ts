import {Component, Input, ViewEncapsulation} from '@angular/core';
import {AppRoutesService} from "../../../../shared/services/app-routes.service";

@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DistributionComponent {
  @Input() cityName: string
  @Input() address: string
  @Input() addressIsEmpty: boolean
  @Input() cityIsEmpty: boolean

  protected distributionCityPage: string = this.appRoutesService.getRoutes().distributionPointsPage
  protected distributionAddressPage: string = this.appRoutesService.getRoutes().distributionAddressPage

  constructor(
    private appRoutesService: AppRoutesService
  ) {
  }
}
