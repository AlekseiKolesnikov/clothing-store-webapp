import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
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
  @ViewChild('wrapper') pageWrapper: ElementRef

  protected cityName: string = ''
  protected citiesArray: string[] = []
  private initialHeight: number;


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
    this.initialHeight = window.innerHeight;
  }

  ngOnDestroy() {
    this.citiesHandlerService.unsubscribe()
  }

  updateList() {
    this.citiesHandlerService.getAllCities()

  }
}
