import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {
  ComponentList = [
    'Accelerometer',
    'Proximity Sensor',
    'Pedometer',
    'Map',
    'Gyroscope',
    'Sound sensor',
    'Pressure sensor',
  ];

 SelectedComponentList = [
  ];
  dumped=[];

  @Output()
 customevent: EventEmitter<any> = new EventEmitter<any>();
  emitevent(){
    this.customevent.emit(this.SelectedComponentList);    
  }
  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
        if(event.container.id=="cdk-drop-list-2"){
          transferArrayItem(event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex);
            this.dumped=[];
        }
        else{
        copyArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
          this.emitevent();
        }
    }
  }  
  constructor() { }

  ngOnInit() {
  }

}
