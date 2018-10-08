import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';

const routes: Routes = [{
    path: 'all',
    component: AppComponent
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
export class AppRoutingModule { }
