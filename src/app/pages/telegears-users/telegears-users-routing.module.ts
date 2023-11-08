import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListTelegearsUsersComponent} from "./list-telegears-users/list-telegears-users.component";
import {CreateTelegearsUserComponent} from "./create-telegears-user/create-telegears-user.component";

const routes: Routes = [
  {
    path: '',
    component: ListTelegearsUsersComponent
  },
  {
    path: 'create',
    component: CreateTelegearsUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelegearsUsersRoutingModule {
}
