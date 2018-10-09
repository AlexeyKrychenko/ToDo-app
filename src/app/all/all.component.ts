import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-all',
    templateUrl: './all.component.html',
    styleUrls: ['./all.component.css']
})

export class AllComponent implements OnInit {
    todos;
    length;
    todoForm: FormGroup;

    constructor(private data: DataService) {
    }

    ngOnInit() {
        this.getTodos();
        this.todoForm = new FormGroup({
            addInput: new FormControl('')
        });
        this.length = this.data.lengthArray();
        console.log(this.todos);
    }

    getTodos() {
        this.todos = this.data.getTodos();
    }

    add() {
        this.data.addTodo(this.todoForm.value.addInput);
        this.length = this.data.lengthArray();
        this.todoForm.reset();
        console.log(this.todos);
    }

    deleteTodo(i) {
        this.data.deleteTodo(i);
        this.length = this.data.lengthArray();
    }

}
