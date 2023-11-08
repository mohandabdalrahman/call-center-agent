import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListCallCenterUsersComponent} from "./list-call-center-users/list-call-center-users.component";
import {CreateCallCenterUserComponent} from "./create-call-center-user/create-call-center-user.component";

const routes: Routes = [
  {
    path: '',
    component: ListCallCenterUsersComponent
  },
  {
    path: 'create',
    component: CreateCallCenterUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallCanterUsersRoutingModule {
}
