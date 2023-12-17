import {Component, ElementRef, OnDestroy, ViewChild, ViewEncapsulation} from '@angular/core';
import {CitiesHandlerService} from "../../services/cities-handler.service";
import {DeliveryDataService} from "../../services/delivery-data.service";
import {Location} from "@angular/common";
import {BaseComponent} from "../../../../shared/models/base-component.model";

@Component({
  selector: 'app-distribution-points-page',
  templateUrl: './distribution-points-page.component.html',
  styleUrls: ['./distribution-points-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DistributionPointsPageComponent extends BaseComponent implements OnDestroy {
  @ViewChild('myInput') myInput: ElementRef

  protected cityName: string = ''
  protected citiesArray: string[] = []

  constructor(
    private readonly citiesHandlerService: CitiesHandlerService,
    private readonly deliveryDataService: DeliveryDataService,
    private readonly location: Location
  ) {
    super();
    this.citiesHandlerService.subscribe().subscribe(data => {
      this.citiesArray = data
    })
  }

  onClick(city: string) {
    this.deliveryDataService.setCity(city)
    this.location.back()
  }

  ngOnDestroy() {
    this.citiesHandlerService.unsubscribe()
  }

  updateList() {
    this.citiesHandlerService.getAllCities()
  }
}
