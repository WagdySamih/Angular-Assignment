import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
// TODO: Extend this service to handle system logging or toast notifications
export class LoggerService {
  private readonly errorColor = 'color: red; font-weight: bold';
  private readonly successColor = 'color: green; font-weight: bold';
  private readonly infoColor = 'color: blue; font-weight: bold';

  error(message: unknown): void {
    console.log('%c[ERROR] %s', this.errorColor, message);
  }

  success(message: unknown): void {
    console.log('%c[SUCCESS] %s', this.successColor, message);
  }

  info(message: unknown): void {
    console.log('%c[INFO] %s', this.infoColor, message);
  }
}
