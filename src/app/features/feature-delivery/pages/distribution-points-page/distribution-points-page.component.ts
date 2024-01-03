import {Component, ViewEncapsulation} from '@angular/core';
import {CitiesHandlerService} from "../../services/cities-handler.service";

@Component({
  selector: 'app-distribution-points-page',
  templateUrl: './distribution-points-page.component.html',
  styleUrls: ['./distribution-points-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DistributionPointsPageComponent {
  protected cityName: string = ''
  protected citiesArray: string[] = []

  constructor(
    private readonly citiesHandlerService: CitiesHandlerService
  ) {
    this.citiesHandlerService.getCitiesSubject().subscribe(data => {
      this.citiesArray = data
    })
  }
}
