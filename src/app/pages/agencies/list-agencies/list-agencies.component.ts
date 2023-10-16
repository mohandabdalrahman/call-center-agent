import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ColData} from "@models/column-data.model";

@Component({
  selector: 'list-agencies',
  templateUrl: './list-agencies.component.html',
  styleUrls: ['./list-agencies.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListAgenciesComponent implements OnInit {
  colData: ColData[] = [];
  rowData: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.setColData();
    this.setRowData();
  }

  setColData() {
    this.colData = [
      {
        field: "id",
        header: "ID",
      },
      {
        field: "name",
        header: "Name",
      },
      {
        field: "email",
        header: "Email",
      }
    ]
  }

  setRowData() {
    this.rowData = [
      {
        id: 1,
        name: "Agency 1",
        email: "mohand@test.com"
      }, {
        id: 2,
        name: "Agency 2",
        email: "mohand@test.com"
      }, {
        id: 3,
        name: "Agency 3",
        email: "mohand@test.com"
      }
    ]
  }
}
