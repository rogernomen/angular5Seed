import { RouterModule, Routes } from '@angular/router';

import {NgModule} from "@angular/core";
import {MainComponent} from "@app/main/components/main.component";
import {SubsectionComponent} from "@app/subsection/components/subsection.component";

const routes: Routes = [
  { path: '',
    component: MainComponent,
    children: [{
      path: 'subsection',
      component: SubsectionComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule { }
