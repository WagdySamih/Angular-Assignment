import { Validators } from '@angular/forms';
const LETTERS_ONLY_PATTERN = '[a-zA-Z ]*';
const NUMBERS_ONLY_PATTERN = '[0-9]*';

export const UserFormModel = {
  firstName: [
    '',
    [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
      Validators.pattern(LETTERS_ONLY_PATTERN),
    ],
  ],
  lastName: [
    '',
    [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
      Validators.pattern(LETTERS_ONLY_PATTERN),
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
      Validators.pattern(LETTERS_ONLY_PATTERN),
    ],
  ],
  country: [
    '',
    [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(LETTERS_ONLY_PATTERN),
    ],
  ],
  zipCode: [
    '',
    [
      Validators.minLength(5),
      Validators.maxLength(10),
      Validators.pattern(NUMBERS_ONLY_PATTERN),
    ],
  ],
};
