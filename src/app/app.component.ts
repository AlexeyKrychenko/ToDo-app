import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from './data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    todos;
    todoForm: FormGroup;
    length;

    constructor(private data: DataService) {
    }

    ngOnInit() {
        this.getTodos();
        this.todoForm = new FormGroup({
            addInput: new FormControl('', Validators.minLength(1))
        });
        this.length = this.data;
    }

    getTodos() {
        this.todos = this.data.getTodos();
    }

    add() {
        this.data.addTodo(this.todoForm.value.addInput);
        this.todoForm.reset();
    }
}



