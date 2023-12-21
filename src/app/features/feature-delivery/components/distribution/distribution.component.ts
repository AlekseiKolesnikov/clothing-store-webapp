import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class DistributionComponent {
  @Input() cityName: string
  @Input() address: string
  constructor() {
  }
}
