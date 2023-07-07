import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

import { User } from '@core/models';
import {
  HeaderService,
  UserService,
  ValidatorsService,
} from '@app/core/services';

import { UserFormModel } from './user-form.model';

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
    private userService: UserService,
    private headerService: HeaderService,
    private validators: ValidatorsService
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

    this.form.statusChanges.subscribe((status) => {
      this.headerService.setIsSaveEnabled(status === 'VALID');
    });
  }

  getErrorMessage(control: AbstractControl): string {
    return this.validators.getErrorMessage(control);
  }
}
