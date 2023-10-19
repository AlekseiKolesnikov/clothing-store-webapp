import {Component, ViewEncapsulation} from '@angular/core';
import {LocalStorageService} from "../../../../local-storage.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticlesComponent {
  protected readonly articlesWidgetsData = this.localStorageService.getItem('articleWidgetData');
  frameState: boolean = false
  constructor(
    private localStorageService: LocalStorageService
  ) {
  }
}
