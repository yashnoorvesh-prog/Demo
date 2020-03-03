import { Component, OnInit } from '@angular/core';
import { Track,Task } from '../shared/Track.model';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  private x ="sdsd";
  private tracks:Track[]=[
    {
      "title": "User Interface",
      "id": "todo",
      "tasks": [
        {
          "id": "first-task",
          "title": "Camera",
          "description": "This is my first task"
        },{
          "id": "second-task",
          "title": "GPS",
          "description": "This is my second task"
        },{
          "id": "f-task",
          "title": "Image",
          "description": "This is my third task"
        }
      ]
    },
    {
      "title": "View",
      "id": "inprogress",
      "tasks": [
        {
          "id": "first-task",
          "title": "",
          "description": "This is my first task"
        },
        {
          "id": "second-task",
          "title": "task 2",
          "description": "This is my second task"
        },
        {
          "id": "third-task",
          "title": "task 3",
          "description": "This is my third task"}
        
      ]
    },
    {
      "title": "Screens",
      "id": "ddone",
      "tasks": [
        {
          "id": "screen-1",
          "title": "Screen 1",
          "description": "This is my first task"
        },{
          "id": "screen-2",
          "title": "screen 2",
          "description": "This is my second task"
        },{
          "id": "screen-3",
          "title": "screen 3  ",
          "description": "This is my third task"
        }
      ]
    },
  ];
  constructor() { dsdsd}

  ngOnInit() {
  }



  onTalkDrop(event: CdkDragDrop<Task[]>) {
    // In case the destination container is different from the previous container, we
    // need to transfer the given task to the target data array. This happens if
    // a task has been dropped on a different track.
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  onTrackDrop(event: CdkDragDrop<Task[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }
 
  get trackIds(): string[] {
    return this.tracks.map(track => track.id);
  }
}
