import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { SigInComponent } from './ui/sig-in/sig-in.component';
import { SignUpComponent } from './ui/sign-up/sign-up.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { UiModule } from './ui/ui.module';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SigInComponent },
  { path: 'signup', component: SignUpComponent },
  {
    path: 'ui',
    loadChildren: () => UiModule
  }
  ,
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
  constructor() { }
}
