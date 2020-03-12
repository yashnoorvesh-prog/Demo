import { Component, OnInit } from '@angular/core';
import { Track,Task } from '../shared/Track.model';
import {CdkDragDrop, copyArrayItem,moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
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
          "parent":"User Interface",
          "id": "first-task",
          "title": "Camera",
          "description": "This is my first task"
        },{
          "parent":"User Interface",
          "id": "second-task",
          "title": "GPS",
          "description": "This is my second task"
        },{
          "parent":"User Interface",
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
          "parent":"View",
          "id": "first-task",
          "title": "",
          "description": "This is my first task"
        }
      ]
    },

    {
      "title": "dump",
      "id": "dumps",
      "tasks": [
        {
          "parent":"Dump",
          "id": "first-task",
          "title": "",
          "description": "This is my first task"
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }



  onTalkDrop(event: CdkDragDrop<Task[]>) {
    // In case the destination container is different from the previous container, we
    // need to transfer the given task to the target data array. This happens if
    // a task has been dropped on a different track.
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if(this.checkDuplicates(event.previousContainer.data,event.previousIndex,event.container.data)){
        
        event.previousContainer.data[event.previousIndex].parent="View";
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      }
    }
  }

  dump(event: CdkDragDrop<Task[]>){
    if (event.previousContainer.data[event.previousIndex].parent=="View"){
      transferArrayItem(event.previousContainer.data,event.container.data, event.previousIndex, event.currentIndex);
      this.tracks[2].tasks[1]=null;
    }
    else{}
  }

  // onTrackDrop(event: CdkDragDrop<Task[]>) {
  //   moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  // }
 
  get trackIds(): string[] {
    return this.tracks.map(track => track.id);
  }


  checkDuplicates(a,b,c){
    // console.log(a[b]);
    
    for (var x of c){
      if (x==a[b]){
        // console.log(c);
        return false;
      }

    }
    return true;
  }
}
