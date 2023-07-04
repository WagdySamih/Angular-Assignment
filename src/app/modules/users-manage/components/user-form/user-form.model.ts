import { Validators } from '@angular/forms';

export const UserFormModel = {
  firstName: ['', Validators.required],
  lastName: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  street: ['', Validators.required],
  city: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
  country: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
  zipCode: ['', Validators.pattern('[0-9]*')],
};
