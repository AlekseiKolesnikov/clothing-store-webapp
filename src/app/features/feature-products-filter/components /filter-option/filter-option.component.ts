import {Component, Input} from '@angular/core';
import {FilterOptionService} from "../../services/filter-option.service";
import {BaseComponent} from "../../../../shared/models/base-component.model";

@Component({
  selector: 'app-filter-option',
  templateUrl: './filter-option.component.html',
  styleUrls: ['./filter-option.component.scss']
})
export class FilterOptionComponent extends BaseComponent {
  @Input() text: string
  @Input() elementIndex: number
  @Input() isSelected: boolean

  constructor(
    private readonly filterOptionService: FilterOptionService
  ) {
    super();
  }

  onClick(index: number) {
    this.filterOptionService.setState(index)
  }
}
