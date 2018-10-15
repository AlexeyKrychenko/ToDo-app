import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    todos$: BehaviorSubject<any> = new BehaviorSubject([]);

    fillForm(value: string) {
        return new FormGroup({
            name: new FormControl(value),
            check: new FormControl(false)
        });
    }

    lengthArray() {
        return this.todos$.getValue().value.length;
    }
}
