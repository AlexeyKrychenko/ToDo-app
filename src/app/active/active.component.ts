import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
    selector: 'app-active',
    templateUrl: './active.component.html',
    styleUrls: ['./active.component.css']
})

export class ActiveComponent implements OnInit {
    todos;

    constructor(private data: DataService) {
    }

    ngOnInit() {
        this.todos = this.data.getTodos();
    }

    deleteTodo(i) {
        this.data.deleteTodo(i);
    }
}
