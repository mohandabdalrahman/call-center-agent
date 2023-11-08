import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'create-telegears-user',
  templateUrl: './create-telegears-user.component.html',
  styleUrls: [
    '../../../scss/create-style.scss',
    './create-telegears-user.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CreateTelegearsUserComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
  }

}
