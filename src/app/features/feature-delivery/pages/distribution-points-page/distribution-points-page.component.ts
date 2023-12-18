import {AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {UsCitiesService} from "../../services/us-cities.service";

@Component({
  selector: 'app-distribution-points-page',
  templateUrl: './distribution-points-page.component.html',
  styleUrls: ['./distribution-points-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DistributionPointsPageComponent implements AfterViewInit {
  @ViewChild('myInput') myInput: ElementRef

  protected cityName: string = ''
  protected citiesArray: string[] = []

  constructor(
    private readonly usCitiesService: UsCitiesService
  ) {
    this.usCitiesService.getCity().subscribe(value => {
      this.citiesArray = value.data
    });
  }

  ngAfterViewInit() {
    this.myInput.nativeElement.focus()
  }

  updateList() {

  }
}
