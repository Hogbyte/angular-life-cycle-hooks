import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { LoggerService } from "../logger.service";

/**
 * Child component with the "OnPush" change detection strategy
 */
@Component({
  selector: 'app-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushComponent implements OnInit {
  private logSourceKey: string = "PushComponent";
  
  /**
   * Creates a new instance
   * @param logger {LoggerService} - injected reference to the logger service
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
   * Uses the logger service to log a message
   * @param message {string} - The message to log
   */
  private logMessage(message): void {
    this.logger.logMessage(this.logSourceKey, message);
  }
}
