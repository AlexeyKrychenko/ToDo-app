import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, Validators} from '@angular/forms';
import {DataService} from './data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    addInput: FormControl;
    todosArray: FormArray;
    service: DataService;

    constructor(private data: DataService) {
    }

    ngOnInit() {
        this.addInput = new FormControl('', Validators.minLength(1));
        this.todosArray = new FormArray([]);
        this.data.todos$.next(this.todosArray);
        console.log(this.data.todos$);
    }

    addTodo() {
        this.todosArray.push(this.data.fillForm(this.addInput.value));
        this.addInput.reset();
        this.service = this.data;
    }
}
