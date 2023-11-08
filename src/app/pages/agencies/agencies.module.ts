import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciesRoutingModule } from './agencies-routing.module';
import { ListAgenciesComponent } from './list-agencies/list-agencies.component';
import {ThemeModule} from "@theme/theme.module";
import {NbButtonModule, NbInputModule} from "@nebular/theme";
import {SharedModule} from "@shared/shared.module";


@NgModule({
  declarations: [
    ListAgenciesComponent
  ],
  imports: [
    AgenciesRoutingModule,
    NbButtonModule,
    NbInputModule,
    SharedModule
  ]
})
export class AgenciesModule { }
