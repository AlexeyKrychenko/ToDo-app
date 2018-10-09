import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})

export class ActiveComponent implements OnInit {
  todos;
  length;

  constructor(private data: DataService) {}

  ngOnInit() {
      this.todos = this.data.getTodos();
      this.length = this.data.lengthArray();
      console.log(this.todos);
  }

    deleteTodo(i) {
        this.data.deleteTodo(i);
        this.length = this.data.lengthArray();
    }
 }
