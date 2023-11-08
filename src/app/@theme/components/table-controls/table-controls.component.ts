import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'table-controls',
  templateUrl: './table-controls.component.html',
  styleUrls: ['./table-controls.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TableControlsComponent implements OnInit {
  @Input() showView = true;
  @Input() showUpdate = true;
  @Input() showDelete = false;
  @Input() viewLabel = 'View';
  @Input() updateLabel = 'Edit';
  @Input() deleteLabel = 'Delete';
  @Input()  viewLink: string;
  @Input() id: number;

  ngOnInit(): void {
  }
}


