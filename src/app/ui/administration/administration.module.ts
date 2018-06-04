import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import { TicketingComponent } from './ticketing/ticketing.component';
import { AppModuleComponent } from './app-module/app-module.component';
import { AgentComponent } from './agent/agent.component';
import { AdministrationRoutingModule } from './administration-routing.module';
@NgModule({
  exports: [
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
  ],
  declarations: [
    AdministrationComponent,
    TicketingComponent,
    AppModuleComponent,
    AgentComponent,
  ]
})
export class AdministrationModule { }
