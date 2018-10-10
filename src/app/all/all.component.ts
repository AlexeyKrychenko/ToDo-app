import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
    selector: 'app-all',
    templateUrl: './all.component.html',
    styleUrls: ['./all.component.css']
})

export class AllComponent implements OnInit {
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
