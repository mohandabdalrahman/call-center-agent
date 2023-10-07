import {NgModule} from "@angular/core";
import {AuthRoutingModule} from "./auth-routing.module";
import {AuthService} from "./auth.service";
import {LoginComponent} from "./login/login.component";
import {NbAlertModule, NbButtonModule, NbInputModule} from "@nebular/theme";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    LoginComponent,
  ],
    imports: [
        AuthRoutingModule,
        NbAlertModule,
        FormsModule,
        NbInputModule,
        CommonModule,
        NbButtonModule
    ],
  exports: [
    FormsModule
  ],
  providers: [AuthService],
})
export class AuthModule {
}
