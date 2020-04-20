import { Component, Input } from '@angular/core';
import { Track, Task } from './shared/Track.model';
import {CdkDragDrop,copyArrayItem, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileServiceService } from './file-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  SuccessMsg :any;
  loading:boolean=false;
  selecteditem=[];

  updateFromChild($event){
    this.selecteditem = $event;
  }
  constructor(private fileService: FileServiceService){

  };
  Build() {
    this.loading=true;
     var s = this.selecteditem.join();
    //  console.log(s);
    this.fileService.buildApk(s).subscribe(response => {
      this.SuccessMsg=response.text;
      this.loading=false;
		}), error => console.log('Error building the project'),
                 () => console.info('File downloaded successfully');
  }


  Download() {
    this.fileService.downloadFile().subscribe(response => {
			window.location.href = response.url;
		}), error => console.log('Error downloading the file'),
                 () => console.info('File downloaded successfully');
  }


}
