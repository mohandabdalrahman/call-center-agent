import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ColData} from "../../../models/column-data.model";

@Component({
  selector: 'list-patient-records',
  templateUrl: './list-patient-records.component.html',
  styleUrls: [
    '../../../scss/list-style.scss',
    './list-patient-records.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListPatientRecordsComponent implements OnInit {
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
        field: 'index',
        header: 'serial number'
      },
      {
        field: 'creationDate',
        header: 'creation date'
      },
      {
        field: 'agencyName',
        header: 'agency name'
      },
      {
        field: 'userName',
        header: 'user name'
      },
      {
        field: 'patientName',
        header: 'patient name'
      },
      {
        field: 'patientNeeds',
        header: 'patient needs'
      },
      {
        field: 'doctorName',
        header: 'doctor name'
      },
      {
        field: 'orderDate',
        header: 'order date'
      },
      {
        field: 'orderTime',
        header: 'order time'
      },
      {
        field: 'status',
        header: 'status'
      }
    ]
  }


  setRowData() {
    this.rowData = [
      {
        index: 1222,
        creationDate: "2020-12-12",
        agencyName: "agency name",
        userName: "user name",
        patientName: "patient name",
        patientNeeds: "patient needs",
        doctorName: "doctor name",
        orderDate: "2020-12-12",
        orderTime: "12:00",
        status: "success"
      },
      {
        index: 1222,
        creationDate: "2020-12-12",
        agencyName: "agency name",
        userName: "user name",
        patientName: "patient name",
        patientNeeds: "patient needs",
        doctorName: "doctor name",
        orderDate: "2020-12-12",
        orderTime: "12:00",
        status: "success"
      },
      {
        index: 1222,
        creationDate: "2020-12-12",
        agencyName: "agency name",
        userName: "user name",
        patientName: "patient name",
        patientNeeds: "patient needs",
        doctorName: "doctor name",
        orderDate: "2020-12-12",
        orderTime: "12:00",
        status: "success"
      }
    ]
  }

}
