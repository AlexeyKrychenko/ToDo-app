import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
    todos;
     length;
    constructor(private data: DataService) {}

    ngOnInit() {
        this.todos = this.data.getTodos();
        this.length = this.data.lengthArray();
    }

    deleteTodo(i) {
        this.data.deleteTodo(i);
        this.length = this.data.lengthArray();
    }

}
