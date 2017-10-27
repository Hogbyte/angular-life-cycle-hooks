import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { LoggerService } from "./logger.service";
import { ChildDefaultComponent } from './child-default/child-default.component';
import { ChildPushComponent } from './child-push/child-push.component';

/**
 * Application routes
 */
const APP_ROUTES: Routes = [
  { path: "default", component: ChildDefaultComponent },
  { path: "push", component: ChildPushComponent },
  { path: "", redirectTo: "/default", pathMatch: "full" }  
];

/**
 * Application root module
 */
@NgModule({
  declarations: [
    AppComponent,
    ChildDefaultComponent,
    ChildPushComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
