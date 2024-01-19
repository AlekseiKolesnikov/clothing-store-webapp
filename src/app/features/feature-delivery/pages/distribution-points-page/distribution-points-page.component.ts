import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';
import {CitiesHandlerService, ISearchData} from "../../services/cities-handler.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-distribution-points-page',
  templateUrl: './distribution-points-page.component.html',
  styleUrls: ['./distribution-points-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DistributionPointsPageComponent implements OnDestroy {
  protected cityName: string = ''
  protected citiesArray: ISearchData[] = []
  private readonly citiesHandler$: Subscription

  constructor(
    private readonly citiesHandlerService: CitiesHandlerService
  ) {
    this.citiesHandler$ = this.citiesHandlerService.getCitiesSubject().subscribe(data => {
      this.citiesArray = data
    })
  }

  ngOnDestroy() {
    this.citiesHandler$.unsubscribe()
  }
}
