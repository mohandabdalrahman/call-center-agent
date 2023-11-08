import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ColData} from "@models/column-data.model";
import {ModalComponent} from "@theme/components/modal/modal.component";

@Component({
  selector: 'list-agencies',
  templateUrl: './list-agencies.component.html',
  styleUrls: ['./list-agencies.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListAgenciesComponent implements OnInit {
  @ViewChild('addAgency') addAgencyModal: ModalComponent;
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
        field: "name",
        header: "callCenterName"
      },
      {
        field: "numOfUsers",
        header: "number of users",
      },
      {
        field: "numOfCreatedRecords",
        header: "number of created records",
      },
      {
        field: "status",
        header: "status",
      }
    ]
  }

  setRowData() {
    this.rowData = [
      {
        name: "Agency 1",
        numOfUsers: 100,
        numOfCreatedRecords: 200,
        status: "success"
      },
      {
        name: "Agency 2",
        numOfUsers: 200,
        numOfCreatedRecords: 400,
        status: "success"
      },
      {
        name: "Agency 3",
        numOfUsers: 500,
        numOfCreatedRecords: 400,
        status: "success"
      },
    ]
  }
}
