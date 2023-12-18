import {Component, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {Router} from "@angular/router";
import {AppRoutesService} from "../../../../shared/services/app-routes.service";

@Component({
  selector: 'app-search-bar-widget',
  templateUrl: './search-bar-widget.component.html',
  styleUrls: ['./search-bar-widget.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchBarWidgetComponent extends BaseComponent {
  protected searchPageRoute: string

  constructor(
    private router: Router,
    private appRoutesService: AppRoutesService
  ) {
    super();
    this.searchPageRoute = this.appRoutesService.getRoutes().searchPage
  }

  override click(event: Event) {
    super.click(event);
    this.router.navigate([this.searchPageRoute])
  }

  override touch(event: Event) {
    super.touch(event);
  }
}
