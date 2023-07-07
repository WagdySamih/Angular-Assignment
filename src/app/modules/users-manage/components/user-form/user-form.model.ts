import { Validators } from '@angular/forms';
import { PATTERNS } from '@app/core/constants';

export const UserFormModel = {
  firstName: [
    '',
    [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
      Validators.pattern(PATTERNS.lettersOnly),
    ],
  ],
  lastName: [
    '',
    [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
      Validators.pattern(PATTERNS.lettersOnly),
    ],
  ],
  email: ['', [Validators.required, Validators.email]],
  street: [
    '',
    [Validators.required, Validators.minLength(5), Validators.maxLength(50)],
  ],
  city: [
    '',
    [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(PATTERNS.lettersOnly),
    ],
  ],
  country: [
    '',
    [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(PATTERNS.lettersOnly),
    ],
  ],
  zipCode: [
    '',
    [
      Validators.minLength(5),
      Validators.maxLength(10),
      Validators.pattern(PATTERNS.numbersOnly),
    ],
  ],
};
