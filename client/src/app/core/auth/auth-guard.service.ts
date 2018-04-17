import {Injectable} from "@angular/core";
import {CanActivate, Router}    from '@angular/router';
import {LoginService} from "@app/login/services/login.service";

@Injectable()
export class AuthGuard implements CanActivate{
  private _isLoggedIn: boolean;

  constructor(private route: Router, private loginService: LoginService) {
    this._isLoggedIn = false;
  }

  canActivate() {
    const isLogged = this.loginService.isLoggedIn;
    console.log('guard', isLogged);
    return true;
    }
}
