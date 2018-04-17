import { Component } from '@angular/core';
import {LoginService} from "@app/login/services/login.service";

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private loginService: LoginService) {}

  model: any = {};

  login() {
      this.loginService.login(this.model.username, this.model.password);
  }
}
