import {Component, ViewEncapsulation} from '@angular/core';
import {ArticlesCardDataService} from "../../../features/feature-article-card/services/articles-card-data.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticlesComponent {
  protected articlesCardsData = this.articlesCardDataService.getData()
  protected frameState: boolean = false
  constructor(
    private articlesCardDataService: ArticlesCardDataService
  ) {
  }
}
