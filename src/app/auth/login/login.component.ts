import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  usernameValue: string;
  passwordValue: string;
  constructor(
    private router: Router,
    public auth: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  getConfigValue(value) {
    return value
  }

  login() {
  }
}
