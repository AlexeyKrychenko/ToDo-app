import {Injectable} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    todos: FormArray = new FormArray([]);
    length;

    fillForm(value: string) {
        return new FormGroup({
            name: new FormControl(value),
            check: new FormControl(false)
        });
    }

    getTodos() {
        return this.todos;
    }

    addTodo(value) {
        this.todos.push(this.fillForm(value));
    }

    deleteTodo(i: number) {
        this.todos.removeAt(i);
    }

    lengthArray() {
        return this.length = `${this.todos.value.length} items length`;
    }
}
