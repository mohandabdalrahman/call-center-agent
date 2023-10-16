import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'left-table-header',
  templateUrl: './left-table-header.component.html',
  styleUrls: ['./left-table-header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LeftTableHeaderComponent implements OnInit {
  @Input() name: string;
  @Input() icon: string;
  @Input() length: number;


  constructor() {
  }

  ngOnInit(): void {
  }

}
