import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableRowComponent implements OnInit {
  @Input() status: string
  @Input() pointsForOrder: string
  @Input() orders: string
  @Input() index: number

  firstColumnClass: string
  secondColumnClass: string
  thirdColumnClass: string
  spanColumnStile: string

  ngOnInit() {
    if (this.index === 0) {
      this.firstColumnClass = "first-column first-row"
      this.secondColumnClass = "second-column first-row"
      this.thirdColumnClass = "third-column first-row"
      this.spanColumnStile = "first-row-span"
    } else {
      this.firstColumnClass = "first-column"
      this.secondColumnClass = "second-column"
      this.thirdColumnClass = "third-column"
      this.spanColumnStile = "points-span"
    }
  }
}
