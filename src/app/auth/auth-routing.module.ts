import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import {NbAuthComponent} from "@nebular/auth";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    data: { pageTitle: "login" },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
