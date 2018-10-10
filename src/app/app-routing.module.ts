import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [{
    path: '',
    loadChildren: './all/all.module#AllModule'
},
    {
        path: 'active',
        loadChildren: './active/active.module#ActiveModule'
    },
    {
        path: 'completed',
        loadChildren: './completed/completed.module#CompletedModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
