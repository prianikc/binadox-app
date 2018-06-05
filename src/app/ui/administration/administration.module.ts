import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AdministrationComponent } from './administration.component';
import { TicketingComponent } from './ticketing/ticketing.component';
import { AppModuleComponent } from './app-module/app-module.component';
import { AgentComponent } from './agent/agent.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import { FilterPipe } from './filter.pipe';

@NgModule({
  exports: [
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdministrationComponent,
    TicketingComponent,
    AppModuleComponent,
    AgentComponent,
    FilterPipe
  ]
})
export class AdministrationModule { }
