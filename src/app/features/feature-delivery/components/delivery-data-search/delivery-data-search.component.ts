import {Component, EventEmitter, Input, OnDestroy, Output, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {Location} from "@angular/common";
import {ManageDeliveryDataSearchService} from "../../services/manage-delivery-data-search.service";

@Component({
  selector: 'app-delivery-data-search',
  templateUrl: './delivery-data-search.component.html',
  styleUrls: ['./delivery-data-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DeliveryDataSearchComponent extends BaseComponent implements OnDestroy {
  @Input() ngModelField: string
  @Input() dataArray: string[]
  @Input() searchOption: string
  @Input() inputLabel: string
  @Output() buttonClick = new EventEmitter

  constructor(
    private readonly manageDeliveryDataSearch: ManageDeliveryDataSearchService,
    private readonly location: Location
  ) {
    super();
  }

  onInputChange() {
    this.manageDeliveryDataSearch.setDeliveryDataSubject(this.searchOption)
  }

  onClick(pickedItem: string) {
    this.buttonClick.emit()
    this.manageDeliveryDataSearch.storeDeliveryData(this.searchOption, pickedItem)
    this.location.back()
  }

  ngOnDestroy() {
    this.manageDeliveryDataSearch.unsubscribe(this.searchOption)
  }
}
