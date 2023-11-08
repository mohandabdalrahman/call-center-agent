import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ColData} from "@models/column-data.model";

@Component({
  selector: 'list-telegears-users',
  templateUrl: './list-telegears-users.component.html',
  styleUrls: [
    '../../../scss/list-style.scss',
    './list-telegears-users.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListTelegearsUsersComponent implements OnInit {
  colData: ColData[] = []
  rowData: any[] = []

  constructor() {
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
        header: 'Number of pending patient records'
      },
      {
        field: 'numOfPatientReports',
        header: 'Number of validated patient reports'
      },
      {
        field: 'numOfPaidReports',
        header: 'Number of paid patient reports'
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
        numOfPaidReports: "300",
        status: "success"
      },
      {
        userName: "mohand1@test.com",
        roles: "Roles",
        numOfPatientRecords: "500",
        numOfPatientReports: "300",
        numOfPaidReports: "300",
        status: "success"
      },
      {
        userName: "mohand2@test.com",
        roles: "Roles",
        numOfPatientRecords: "600",
        numOfPatientReports: "700",
        numOfPaidReports: "300",
        status: "success"
      },
    ]
  }

}
