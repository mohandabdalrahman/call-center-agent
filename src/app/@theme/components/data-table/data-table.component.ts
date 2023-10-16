import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ColData} from "@models/column-data.model";

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DataTableComponent implements OnInit {
  @Input() rowData: any;
  @Input() colData: ColData[] = [];
  @Input() tableControls = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}
