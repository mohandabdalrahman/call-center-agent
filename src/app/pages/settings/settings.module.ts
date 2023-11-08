import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {FormsModule} from "@angular/forms";
import {NbButtonModule, NbInputModule} from "@nebular/theme";


@NgModule({
  declarations: [
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FormsModule,
    NbInputModule,
    NbButtonModule,
  ]
})
export class SettingsModule { }
