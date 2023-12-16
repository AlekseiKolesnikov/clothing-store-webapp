import {Component, ElementRef, OnDestroy, ViewChild, ViewEncapsulation} from '@angular/core';
import {CitiesHandlerService} from "../../services/cities-handler.service";
import {DeliveryDataService} from "../../services/delivery-data.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-distribution-points-page',
  templateUrl: './distribution-points-page.component.html',
  styleUrls: ['./distribution-points-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DistributionPointsPageComponent implements OnDestroy {
  @ViewChild('myInput') myInput: ElementRef
  @ViewChild('cityBox') cityBox: ElementRef

  protected cityName: string = ''
  protected citiesArray: string[] = []

  constructor(
    private readonly citiesHandlerService: CitiesHandlerService,
    private readonly deliveryDataService: DeliveryDataService,
    private readonly location: Location
  ) {
    this.citiesHandlerService.subscribe().subscribe(data => {
      this.citiesArray = data
    })
  }

  onScroll() {
    const activeElement = <HTMLElement>document.activeElement
    activeElement.blur()
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
