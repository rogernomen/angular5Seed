import {BasicAuth} from "@app/core/auth/basic-auth.service";
import {Injectable} from "@angular/core";

@Injectable()
export class LoginRemote {

  constructor(private http: BasicAuth) {}


  login(username : string, password: string) {
      const body = {
        username: username,
        password: password
      };

      return this.http.post('/api/login', body);
  }
}
