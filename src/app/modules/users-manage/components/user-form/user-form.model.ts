import { Validators } from '@angular/forms';

export const UserFormModel = {
  firstName: [
    '',
    [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
      Validators.pattern('[a-zA-Z ]*'),
    ],
  ],
  lastName: [
    '',
    [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
      Validators.pattern('[a-zA-Z ]*'),
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
      Validators.pattern('[a-zA-Z ]*'),
      Validators.minLength(3),
      Validators.maxLength(20),
    ],
  ],
  country: [
    '',
    [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
      Validators.minLength(3),
      Validators.maxLength(20),
    ],
  ],
  zipCode: [
    '',
    [
      Validators.pattern('[0-9]*'),
      Validators.minLength(5),
      Validators.maxLength(10),
    ],
  ],
};
