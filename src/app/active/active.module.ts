import {Input, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ActiveRoutingModule} from './active-routing.module';
import {ActiveComponent} from './active.component';

@NgModule({
    imports: [
        CommonModule,
        ActiveRoutingModule
    ],
    declarations: [
        ActiveComponent
    ]
})
export class ActiveModule {
}
