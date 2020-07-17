import { NgModule } from '@angular/core';
import { NgxDynamicTimelineComponent } from './ngx-dynamic-timeline.component';
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [NgxDynamicTimelineComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxDynamicTimelineComponent]
})
export class NgxDynamicTimelineModule { }
