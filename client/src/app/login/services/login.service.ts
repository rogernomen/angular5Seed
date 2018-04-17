import {LoginRemote} from "@app/login/services/login.remote";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";


@Injectable()
export class LoginService {
  private _isLoggedIn: boolean;

  constructor(private loginRemote: LoginRemote, private route: Router) {
    this._isLoggedIn = false;
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }

   login(username : string, password : string){
      this.loginRemote.login(username, password).subscribe(() => {
          this.route.navigate(['/main']);
      });
   }
}
