import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {CdekCitiesService, ICdekCity} from "../../services/cdek-cities.service";
import {TelegramMainButtonModel} from "../../../../shared/models/telegram-ui/telegram-main-button.model";

@Component({
  selector: 'app-distribution-points-page',
  templateUrl: './distribution-points-page.component.html',
  styleUrls: ['./distribution-points-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DistributionPointsPageComponent implements AfterViewInit, OnInit {
  @ViewChild('myInput') myInput: ElementRef

  protected cityName: string = ''
  protected citiesArray: ICdekCity[] = []

  constructor(
    private readonly cdekCitiesService: CdekCitiesService,
    private readonly telegramMainButton: TelegramMainButtonModel
  ) {
  }

  ngOnInit() {
    this.telegramMainButton.activateMainButton("Сохранить")
  }

  ngAfterViewInit() {
    this.myInput.nativeElement.focus()
  }

  updateList() {
    this.cdekCitiesService.getCity(this.cityName).subscribe(value => {
      console.log(value)
    });
  }
}
