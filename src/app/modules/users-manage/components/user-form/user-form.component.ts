import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

import { User } from '@core/models';
import { UserFormModel } from './user-form.model';
import { UserService } from '@app/core/services';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Input() user: User | undefined;
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group(UserFormModel);

    if (this.user) {
      this.form.patchValue(this.user);
    }

    this.form.valueChanges.subscribe((formValue) => {
      const user: User = {
        ...this.user,
        ...formValue,
      };
      this.userService.editedUserSubject.next(user);
    });
  }

  getErrorMessage(control: AbstractControl): string {
    if (control.hasError('required')) {
      return 'This field is required.';
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
