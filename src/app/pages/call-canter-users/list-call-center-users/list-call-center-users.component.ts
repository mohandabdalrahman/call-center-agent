import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ColData} from "@models/column-data.model";

@Component({
  selector: 'list-call-center-users',
  templateUrl: './list-call-center-users.component.html',
  styleUrls: [
    '../../../scss/list-style.scss',
    './list-call-center-users.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListCallCenterUsersComponent implements OnInit {
  colData: ColData[] = [];
  rowData: any[] = [];

  constructor(
  ) {
  }

  ngOnInit(): void {
    this.setColData();
    this.setRowData();
  }

  setColData() {
    this.colData = [
      {
        field: "userName",
        header: "user name"
      },
      {
        field: 'roles',
        header: 'Roles'
      },
      {
        field: 'numOfPatientRecords',
        header: 'Number of patient records'
      },
      {
        field: 'numOfPatientReports',
        header: 'Number of patient reports'
      },
      {
        field: 'status',
        header: 'Status'
      }
    ]
  }

  setRowData() {
    this.rowData = [
      {
        userName: "mohand@test.com",
        roles: "Roles",
        numOfPatientRecords: "100",
        numOfPatientReports: "200",
        status: "success"
      },
      {
        userName: "mohand1@test.com",
        roles: "Roles",
        numOfPatientRecords: "500",
        numOfPatientReports: "300",
        status: "success"
      },
      {
        userName: "mohand2@test.com",
        roles: "Roles",
        numOfPatientRecords: "600",
        numOfPatientReports: "700",
        status: "success"
      },
    ]
  }

}
