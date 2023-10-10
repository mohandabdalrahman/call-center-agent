import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'statics-card',
  templateUrl: './statics-card.component.html',
  styleUrls: ['./statics-card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class StaticsCardComponent implements OnInit {
  @Input() name: string;
  @Input() count: string;
  @Input() icon: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
