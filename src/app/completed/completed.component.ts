import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
    selector: 'app-completed',
    templateUrl: './completed.component.html',
    styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
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
