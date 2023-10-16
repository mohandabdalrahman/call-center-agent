import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListAgenciesComponent} from "./list-agencies/list-agencies.component";

const routes: Routes = [
  {
    path: "",
    component: ListAgenciesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgenciesRoutingModule {
}
