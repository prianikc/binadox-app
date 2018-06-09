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
import { CapitalizeFirstPipe } from './capitalize-first.pipe';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  exports: [
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [
    AdministrationComponent,
    TicketingComponent,
    AppModuleComponent,
    AgentComponent,
    FilterPipe,
    CapitalizeFirstPipe,
  ]
})
export class AdministrationModule { }
