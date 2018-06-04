import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from '../navbar/navbar.component';
import { AdministrationModule } from '../ui/administration/administration.module';
import { UiComponent } from './ui.component';
import { UiRoutesModule } from './ui-routes.module';

@NgModule({
    exports: [
        NavbarComponent,
        UiComponent
    ],
    imports: [
        CommonModule,
        AdministrationModule,
        UiRoutesModule
    ],
    declarations: [
        NavbarComponent,
        UiComponent
    ]
})
export class UiModule { }
