import {Component, Input, ViewEncapsulation} from '@angular/core';
import {DISTRIBUTION_ADDRESS_PAGE, DISTRIBUTION_CITY_PAGE} from "../../../../shared/data/app-routes";

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

  protected readonly DISTRIBUTION_CITY_PAGE = DISTRIBUTION_CITY_PAGE;
  protected readonly DISTRIBUTION_ADDRESS_PAGE = DISTRIBUTION_ADDRESS_PAGE;
}
