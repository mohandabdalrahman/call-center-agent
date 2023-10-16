import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciesRoutingModule } from './agencies-routing.module';
import { ListAgenciesComponent } from './list-agencies/list-agencies.component';
import {ThemeModule} from "@theme/theme.module";


@NgModule({
  declarations: [
    ListAgenciesComponent
  ],
  imports: [
    CommonModule,
    AgenciesRoutingModule,
    ThemeModule
  ]
})
export class AgenciesModule { }
