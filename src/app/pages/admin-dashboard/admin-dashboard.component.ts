import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AdminDashboardComponent implements OnInit {
cards = [
  {
    name: "call center agencies",
    count: "10",
    icon: "bulb-outline"
  },
  {
    name: "call center users",
    count: "100",
    icon: "people-outline"
  },
  {
    name: "telegears users",
    count: "100",
    icon: "people-outline"
  },
  {
    name: "Paid Patient Records",
    count: "1000",
    icon: "printer-outline"
  } ,
  {
    name: "Validated Patient Records",
    count: "500",
    icon: "checkmark-square-outline",
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
