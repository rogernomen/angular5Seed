import {NgModule, Optional, SkipSelf} from '@angular/core';
import {BASIC_AUTH_CONFIG, BASIC_AUTH_CONSTANTS} from "@app/core/auth/basic-auth.config";
import {BasicAuth} from "@app/core/auth/basic-auth.service";
import {HttpClientModule} from "@angular/common/http";
import {AuthGuard} from "@app/core/auth/auth-guard.service";
import {LoginService} from "@app/login/services/login.service";
import {LoginModule} from "@app/login/login.module";




@NgModule({
  imports: [
    HttpClientModule,
    LoginModule
  ],
  declarations: [],
  providers: [
    {provide: BASIC_AUTH_CONFIG, useValue: BASIC_AUTH_CONSTANTS},
    HttpClientModule,
    BasicAuth,
    AuthGuard,
    LoginService
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
