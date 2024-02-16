import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent {
  todo = ['test 1', 'test 2'];

  done = ['test 3' , 'test 4' ];

  running = ['test 5'];

  drop(event: CdkDragDrop<string[]>) {
    console.log(event.container.id)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if((event.previousContainer.id === 'cdk-drop-list-0' && event.container.id=== 'cdk-drop-list-1')||
      (event.previousContainer.id==='cdk-drop-list-1' && event.container.id === 'cdk-drop-list-2')){
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
      }
    }
  }
}
