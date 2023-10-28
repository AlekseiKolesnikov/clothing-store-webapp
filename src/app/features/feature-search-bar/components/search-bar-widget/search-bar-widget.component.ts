import {Component, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.service";
import {Router} from "@angular/router";
import {appRoutes} from "../../../../shared/data/app-routes";

@Component({
  selector: 'app-search-bar-widget',
  templateUrl: './search-bar-widget.component.html',
  styleUrls: ['./search-bar-widget.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchBarWidgetComponent extends BaseComponent {
  constructor(
    private router: Router
  ) {
    super();
  }
  override click(event: Event) {
    super.click(event);
    this.router.navigate([appRoutes.searchPage])
  }

  override touch(event: Event) {
    super.touch(event);
  }
}
