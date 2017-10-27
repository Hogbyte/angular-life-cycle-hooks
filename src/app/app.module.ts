import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoggerService } from "./logger.service";
import { ChildComponent } from './child/child.component';
import { PushComponent } from './push/push.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    PushComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
