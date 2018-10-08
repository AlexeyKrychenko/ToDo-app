import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    todoForm: FormGroup;
    length: string;

    get TodoArray() {
        return this.todoForm.get('todo') as FormArray;
    }

    ngOnInit() {
        this.todoForm = new FormGroup({
            addInput: new FormControl(''),
            todo: new FormArray([]),
        });

    }

    fillForm() {
        return new FormGroup({
            name: new FormControl(this.todoForm.value.addInput),
            check: new FormControl(false)
        });
    }

    add() {
        this.TodoArray.push(this.fillForm());
        this.length = `${this.TodoArray.value.length} items length`;

    }

    deleteTodo(i: number) {
        this.TodoArray.removeAt(i);
        this.length = `${this.TodoArray.value.length} items length`;
    }

    checked() {
        this.TodoArray.value.check = !this.TodoArray.value.check;
    }
}
