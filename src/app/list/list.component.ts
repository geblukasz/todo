import { Component, OnInit } from '@angular/core';

interface Task {
  name: string,
  isCompleted: boolean
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public inputValue: string;
  public list: Array<Task> = [
    {name: 'task 1',
    isCompleted: true },
    {name: 'task 2',
    isCompleted: false }
  ];


  constructor() { }

  ngOnInit(): void {
  }

 
  handleClick() {
    if (this.inputValue.trim() !== ""){
      this.add(this.inputValue);
      this.inputValue = '';
    }
  }
  
  private add(name: string): void {
    this.list.push({
      name: name,
      isCompleted: false
    })
  };

  remove(i: Task):void {
    const index = this.list.indexOf(i, 0);
    if (index > -1) {
      this.list.splice(index, 1);
    }

  }

}
