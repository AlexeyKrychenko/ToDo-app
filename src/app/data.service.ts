import {Injectable} from '@angular/core';
import { Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    todos$: Subject<any> = new Subject<any>();

    // lengthArray() {
    //     return this.todos$.getValue().value.length;
    // }

}
