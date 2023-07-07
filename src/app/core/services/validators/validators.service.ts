import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  getErrorMessage(control: AbstractControl): string {
    if (control.hasError('required')) {
      return 'This field is required.';
    }
    if (control.hasError('minlength')) {
      const minLength = control.errors?.['minlength'].requiredLength;
      return `Minimum length is ${minLength} characters.`;
    }
    if (control.hasError('maxlength')) {
      const maxLength = control.errors?.['maxlength'].requiredLength;
      return `Maximum length is ${maxLength} characters.`;
    }
    if (control.hasError('pattern')) {
      return 'Please enter a valid value.';
    }
    if (control.hasError('email')) {
      return 'Please enter a valid email address.';
    }
    return '';
  }
}
