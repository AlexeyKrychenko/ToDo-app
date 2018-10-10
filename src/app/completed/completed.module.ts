import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CompletedRoutingModule} from './completed-routing.module';
import {CompletedComponent} from './completed.component';

@NgModule({
    imports: [
        CommonModule,
        CompletedRoutingModule
    ],
    declarations: [
        CompletedComponent
    ]
})
export class CompletedModule {
}
