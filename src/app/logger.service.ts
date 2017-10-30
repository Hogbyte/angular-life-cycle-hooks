import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

/**
 * Represents a single log message
 */
export interface ILogMessage {
  sourceKey: string;
  message: string;
}

/**
 * Service for logging messages
 */
@Injectable()
export class LoggerService {
  private logSourceKey: string = "LoggerService";
  private logBackgroundColor: string = "lightgoldenrodyellow";

  // NOTE: Currently not being used - logging is done to console
  private messages: ILogMessage[] = [];
  private messagesChangedSubject: Subject<ILogMessage[]> = new Subject<ILogMessage[]>();
  messagesChanged$: Observable<ILogMessage[]> = this.messagesChangedSubject.asObservable();

  /**
   * Creates a new instance
   */
  constructor() {
    this.logMessage(this.logSourceKey, "Contructor called.", this.logBackgroundColor);
  }

  /**
   * Clears the current message list
   */
  clearMessages(): void {
    console.clear();
    // Note: intentionally creating a new array when messages are cleared
    //this.messages = [{ sourceKey: this.logSourceKey, message: "Cleared messages." }];
    //this.messagesChangedSubject.next(this.messages);
  }

  /**
   * Logs a new message to the list
   * @param sourceKey {string} - The message source key
   * @param message {string} - The message text
   * @param backgroundColor {string} - The background color to show with the message
   */
  logMessage(sourceKey: string, message: string, backgroundColor: string): void {    
    // Note: intentionally creating a new array when messages are added
    //this.messages = [...this.messages, { sourceKey, message }];
    //this.messagesChangedSubject.next(this.messages);

    // Not sure if this will work in Chrome (supported in Firefox)
    console.log(`%c ${sourceKey}: ${message}`, `color: black; background-color: ${backgroundColor}`);
  }
}
