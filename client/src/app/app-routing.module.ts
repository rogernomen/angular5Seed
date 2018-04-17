import { RouterModule, Routes } from '@angular/router';

import {NgModule} from "@angular/core";
import {AuthGuard} from "@app/core/auth/auth-guard.service";

const routes: Routes = [
  { path: 'login',
    loadChildren: 'app/login/login.module#LoginModule',
    canActivate: [AuthGuard]
  }, {
    path: 'main',
    loadChildren: 'app/main/main.module#MainModule'
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
