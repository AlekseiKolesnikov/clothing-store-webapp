import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, ViewEncapsulation} from '@angular/core';
import {CitiesHandlerService} from "../../services/cities-handler.service";
import {ViewportHandlerService} from "../../services/viewport-handler.service";

@Component({
  selector: 'app-distribution-points-page',
  templateUrl: './distribution-points-page.component.html',
  styleUrls: ['./distribution-points-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DistributionPointsPageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('myInput') myInput: ElementRef

  protected cityName: string = ''
  protected citiesArray: string[] = []

  constructor(
    private readonly citiesHandlerService: CitiesHandlerService,
    private readonly viewportHandlerService: ViewportHandlerService
  ) {
    this.citiesHandlerService.subscribe().subscribe(data => {
      this.citiesArray = data
    })
  }

  ngAfterViewInit() {
    this.myInput.nativeElement.focus()
    if (window.visualViewport) {
      window.visualViewport.addEventListener("scroll", this.viewportHandlerService.handleViewport);
      window.visualViewport.addEventListener("resize", this.viewportHandlerService.handleViewport);
    }
  }

  ngOnDestroy() {
    this.citiesHandlerService.unsubscribe()
  }

  updateList() {
    this.citiesHandlerService.getAllCities()
  }
}
