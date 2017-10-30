import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import "rxjs/add/operator/switchMap";

import { LoggerService } from "../logger.service";

/**
 * Child component with the "OnPush" change detection strategy
 */
@Component({
  selector: "app-child-push",
  templateUrl: './child-push.component.html',
  styleUrls: ['./child-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildPushComponent implements OnInit {
  data: string = "";
  private logSourceKey: string = "ChildPushComponent";
  private logBackgroundColor: string = "lightSeaGreen";
  
  /**
   * Creates a new instance
   * @param activatedRoute {ActivatedRoute} - Injected reference to the activated route
   * @param logger {LoggerService} - Injected reference to the logger service
   */
  constructor(private activatedRoute: ActivatedRoute, private logger: LoggerService) {
    this.logMessage("Constructor called.");
  }

  /**
   * Lifecycle hook: On Changes
   */
  ngOnChanges(): void {
    this.logMessage("ngOnChanges called.");
  }

  /**
   * Lifecycle hook: On Init
   */
  ngOnInit(): void {
    this.logMessage("ngOnInit called.");

    // Process route parameter changes
    this.activatedRoute.params.forEach((params: Object) => {
      this.data = params["data"];
      this.logMessage(`${this.logSourceKey}: Data changed to ${this.data}`);
    });
  }

  /**
   * Lifecycle hook: Do Check
   */
  ngDoCheck(): void {
    this.logMessage("ngDoCheck called.");
  }

  ngAfterContentInit(): void {
    this.logMessage("ngAfterContentInit called.");
  }

  /**
   * Lifecycle hook: After Content Checked
   */
  ngAfterContentChecked(): void {
    this.logMessage("ngAfterContentChecked called.");
  }

  /**
   * Lifecycle hook: After View Init
   */
  ngAfterViewInit(): void {
    this.logMessage("ngAfterViewInit called.");
  }

  /**
   * Lifecycle hook: After View Checked
   */
  ngAfterViewChecked(): void {
    this.logMessage("ngAfterViewChecked called.");
  }

  /**
   * Lifecycle hook: On Destroy
   */
  ngOnDestroy(): void {
    this.logMessage("ngOnDestroy called.");
  }

  /**
   * Runs when the "Log button event" button is clicked
   */
  onButtonClick(): void {
    this.logMessage("Button clicked.");
  }

  /**
   * Uses the logger service to log a message
   * @param message {string} - The message to log
   */
  private logMessage(message): void {
    this.logger.logMessage(this.logSourceKey, message, this.logBackgroundColor);
  }
}
