import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {DataService} from './data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    addInput: FormControl;
    service: DataService;

    constructor(private data: DataService) {
    }

    ngOnInit() {
        this.addInput = new FormControl('', Validators.minLength(1));
    }

    addTodo() {
        this.data.todos$.next(this.addInput.value);
        this.addInput.reset();
        this.service = this.data;
    }
}
