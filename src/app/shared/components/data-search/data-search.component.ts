import {Component, Input, OnDestroy, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../models/base-component.model";
import {Location} from "@angular/common";
import {ManageDeliveryDataSearchService} from "../../../features/feature-delivery/services/manage-delivery-data-search.service";
import {ISearchData} from "../../interfaces/delivery-interfaces";

@Component({
  selector: 'app-data-search',
  templateUrl: './data-search.component.html',
  styleUrls: ['./data-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DataSearchComponent extends BaseComponent implements OnDestroy {
  @Input() ngModelField: string
  @Input() dataArray: ISearchData[]
  @Input() searchOption: string
  @Input() inputLabel: string
  protected inputText: string = ''

  constructor(
    private readonly manageDeliveryDataSearch: ManageDeliveryDataSearchService,
    private readonly location: Location
  ) {
    super();
  }

  onInputChange() {
    this.inputText = this.ngModelField
    this.manageDeliveryDataSearch.setDeliveryDataSubject(this.searchOption)
  }

  onClick(pickedItem: string, itemId: number) {
    this.manageDeliveryDataSearch.storeDeliveryData(this.searchOption, pickedItem, this.location, itemId)
  }

  ngOnDestroy() {
    this.manageDeliveryDataSearch.unsubscribe(this.searchOption)
  }
}
