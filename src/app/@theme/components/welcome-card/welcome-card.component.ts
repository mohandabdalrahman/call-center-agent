import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class WelcomeCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
