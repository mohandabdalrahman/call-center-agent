import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelegearsUsersRoutingModule } from './telegears-users-routing.module';
import { ListTelegearsUsersComponent } from './list-telegears-users/list-telegears-users.component';
import {SharedModule} from "@shared/shared.module";
import {NbButtonModule, NbInputModule, NbOptionModule, NbSelectModule} from "@nebular/theme";
import { CreateTelegearsUserComponent } from './create-telegears-user/create-telegears-user.component';
import {NgxSpinnerModule} from "ngx-spinner";


@NgModule({
  declarations: [
    ListTelegearsUsersComponent,
    CreateTelegearsUserComponent
  ],
    imports: [
        CommonModule,
        TelegearsUsersRoutingModule,
        SharedModule,
        NbButtonModule,
        NbInputModule,
        NbOptionModule,
        NbSelectModule,
    ]
})
export class TelegearsUsersModule { }
