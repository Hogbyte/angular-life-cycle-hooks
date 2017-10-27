import { Component } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

import { ILogMessage, LoggerService } from "./logger.service";

/**
 * Root component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages: ILogMessage[] = null;
  private logSourceKey: string = "AppComponent";
  private logBackgroundColor: string = "lightcyan";
  private messagesChangedSubscription: Subscription = null;

  /**
   * Creates a new instance
   * @param logger {LoggerService} - Injected reference to the logger service
   */
  constructor(private logger: LoggerService) {
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

    // Update messages when logger messages change
    this.messagesChangedSubscription = this.logger.messagesChanged$.subscribe(
      (newMessageList: ILogMessage[]) => {
        this.messages = newMessageList;
      }
    );
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

    // Unsubscribe from message changes
    if (this.messagesChangedSubscription) {
      this.messagesChangedSubscription.unsubscribe();
    }
  }

  /**
   * Runs when the "Clear Messages" button is clicked
   */
  onClearMessages(): void {
    this.logger.clearMessages();
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
