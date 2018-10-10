import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AllRoutingModule} from './all-routing.module';
import {AllComponent} from './all.component';

@NgModule({
    imports: [
        CommonModule,
        AllRoutingModule,
    ],
    declarations: [
        AllComponent
    ],
    exports: [AllComponent]
})
export class AllModule {
}
