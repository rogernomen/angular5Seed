import {NgModule} from "@angular/core";
import {MainComponent} from "@app/main/components/main.component";
import {MainRoutingModule} from "@app/main/main-routing.module";
import {SubsectionModule} from "@app/subsection/subsection-module";

@NgModule({
  imports: [MainRoutingModule, SubsectionModule],
  declarations: [MainComponent],
  exports: []
})


export class MainModule {}
