import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { ERROR_MESSAGES } from '@core/constants';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  getErrorMessage(control: AbstractControl): string {
    if (control.hasError('required')) {
      return ERROR_MESSAGES.required;
    }
    if (control.hasError('minlength')) {
      const minLength = control.errors?.['minlength'].requiredLength;
      return ERROR_MESSAGES.minLength(minLength);
    }
    if (control.hasError('maxlength')) {
      const maxLength = control.errors?.['maxlength'].requiredLength;
      return ERROR_MESSAGES.maxLength(maxLength);
    }
    if (control.hasError('pattern')) {
      const pattern = control.errors?.['pattern'].requiredPattern;
      return ERROR_MESSAGES.pattern[pattern] || ERROR_MESSAGES.pattern.default;
    }
    if (control.hasError('email')) {
      return ERROR_MESSAGES.email;
    }
    return '';
  }
}
