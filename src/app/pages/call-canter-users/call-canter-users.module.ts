import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallCanterUsersRoutingModule } from './call-canter-users-routing.module';
import { ListCallCenterUsersComponent } from './list-call-center-users/list-call-center-users.component';
import {ThemeModule} from "@theme/theme.module";
import {SharedModule} from "@shared/shared.module";
import {NbButtonModule, NbInputModule, NbSelectModule} from "@nebular/theme";
import { CreateCallCenterUserComponent } from './create-call-center-user/create-call-center-user.component';


@NgModule({
  declarations: [
    ListCallCenterUsersComponent,
    CreateCallCenterUserComponent
  ],
  imports: [
    CallCanterUsersRoutingModule,
    SharedModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule
  ]
})
export class CallCanterUsersModule { }
