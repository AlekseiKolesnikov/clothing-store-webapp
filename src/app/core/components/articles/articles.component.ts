import {Component, ViewEncapsulation} from '@angular/core';
import {LocalStorageService} from "../../../local-storage.service";
import {localStorageKeys} from "../../../shared/data/local-storage-keys";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticlesComponent {
  protected readonly articlesCardsData = this.localStorageService.getItem(localStorageKeys.articleCardsKey);
  protected frameState: boolean = false
  constructor(
    private localStorageService: LocalStorageService
  ) {
  }
}
