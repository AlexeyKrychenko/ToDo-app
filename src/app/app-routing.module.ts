import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';

const routes: Routes = [
    {
        path: '',
        component: TodoListComponent,
        data: {todos: 'all'}
    },
    {
        path: 'active',
        component: TodoListComponent,
        data: {todos: 'active'}
    },
    {
        path: 'completed',
        component: TodoListComponent,
        data: {todos: 'completed'}
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
