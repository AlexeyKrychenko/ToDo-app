import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-active',
    templateUrl: './active.component.html',
    styleUrls: ['./active.component.css']
})

export class ActiveComponent implements OnInit {
    todos;
    length;
    form: FormGroup;
    constructor(private data: DataService) {
    }

    ngOnInit() {
        // this.form = new FormGroup({
        //     addInput: new FormControl('')
        // });
        this.todos = this.data.getTodos();
        this.length = this.data.lengthArray();
        console.log(this.todos);
    }

    deleteTodo(i) {
        this.data.deleteTodo(i);
        this.length = this.data.lengthArray();
    }

    // add() {
    //     this.data.addTodo(this.form.value.addInput);
    // }
}
