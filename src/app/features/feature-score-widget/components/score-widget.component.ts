import {Component, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../shared/models/base-component.service";
import {LocalStorageService} from "../../../local-storage.service";
import {Router} from "@angular/router";
import {localStorageKeys} from "../../../shared/data/local-storage-keys";

@Component({
  selector: 'app-score-widget',
  templateUrl: './score-widget.component.html',
  styleUrls: ['./score-widget.component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class ScoreWidgetComponent extends BaseComponent {
  protected readonly pointsAmount = this.localStorageService.getItem(localStorageKeys.scoreWidgetKey)

  constructor(
    private router: Router,
    protected readonly localStorageService: LocalStorageService
  ) {
    super();
  }
  override click(event: Event) {
    super.click(event);
  }

  override touch(event: Event) {
    super.touch(event);
  }
}
