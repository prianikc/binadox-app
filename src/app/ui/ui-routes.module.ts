import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { UiComponent } from './ui.component';
import { AdministrationModule } from './administration/administration.module';

const uiRoutes: Routes = [
    {
        path: '',
        component: UiComponent,
        children: [
            {
                path: 'administration',
                loadChildren: () => AdministrationModule

            },
            {
                path: '', redirectTo: 'administration', pathMatch: 'full'
            }
        ]
    }


];
@NgModule({
    imports: [
        RouterModule.forChild(uiRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UiRoutesModule { }
