import {Component, ViewEncapsulation} from '@angular/core';
import {PaginationService} from "../../features/feature-products/services/pagination.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainPageComponent {
  protected isLoaderVisible: boolean
  constructor(
    private readonly paginationService: PaginationService
  ) {
  }

  onScroll(event: any) {
    this.paginationService.getLoaderState().subscribe(result => {
      this.isLoaderVisible = result
    })
    this.paginationService.onWindowScroll(event)
  }
}
