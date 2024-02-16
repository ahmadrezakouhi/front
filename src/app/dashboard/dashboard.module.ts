import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CdkDrag,CdkDropList,CdkDropListGroup,} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CdkDropListGroup, 
    CdkDropList, 
    CdkDrag,
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
