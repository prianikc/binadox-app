import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { TicketingComponent } from './ticketing/ticketing.component';
import { AppModuleComponent } from './app-module/app-module.component';
import { AgentComponent } from './agent/agent.component';
import { AdministrationComponent } from './administration.component';


const administrationRoutes: Routes = [
  {
    path: '',
    component: AdministrationComponent,
    children: [
      { path: '', redirectTo: 'app-module', pathMatch: 'full' },
      { path: 'agent', component: AgentComponent },
      { path: 'ticketing', component: TicketingComponent },
      { path: 'app-module', component: AppModuleComponent }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(administrationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdministrationRoutingModule { }
