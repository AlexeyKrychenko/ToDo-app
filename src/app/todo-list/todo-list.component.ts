import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    todos$: Subject<any>;
    // routeData: string;
    todosArray: FormArray;

    constructor(
        private route: ActivatedRoute,
        private data: DataService
    ) {
    }

    ngOnInit() {
        this.todosArray = new FormArray([]);
        this.todos$ = this.data.todos$;
        this.todos$.subscribe(value => this.todosArray.push(this.fillForm(value)));
        // this.routeData = this.route.snapshot.data.todos;
        console.log(this.todosArray);
    }

    deleteTodo(i: number) {
        this.todosArray.removeAt(i);
        // this.data.lengthArray();
    }


    fillForm(value: string) {
        return new FormGroup({
            name: new FormControl(value),
            check: new FormControl(false)
        });
    }

    // filterTodos() {
    //     switch (this.routeData) {
    //         case 'all':
    //             return this.todos;
    //         case 'active':
    //             return this.todos.value.filter(obj => !obj.check);
    //         case 'completed':
    //             return this.todos.value.filter(obj => obj.check);
    //     }
    // }
}
