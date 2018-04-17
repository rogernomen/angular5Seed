import {NgModule} from "@angular/core";
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from "@app/login/components/login.component";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from 'primeng/button';
import {LoginService} from "@app/login/services/login.service";
import {LoginRemote} from "@app/login/services/login.remote";


@NgModule({
  imports: [LoginRoutingModule, FormsModule, ButtonModule],
  exports: [],
  providers: [LoginService, LoginRemote],
  declarations: [LoginComponent]
})

export class LoginModule {}
