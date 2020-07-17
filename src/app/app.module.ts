import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxDynamicTimelineModule} from "ngx-dynamic-timeline";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDynamicTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
