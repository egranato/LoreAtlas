import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { IUser, User } from 'src/app/models/user.models';
import { HttpService } from 'src/app/services/http.service';
import { DataStoreService } from 'src/app/workspace/services/data-store.service';

@Component({
  selector: 'la-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  loading: boolean;
  userForm?: UntypedFormGroup;

  constructor(
    private fb: FormBuilder,
    private dataStore: DataStoreService,
    private http: HttpService
  ) {
    this.loading = true;

    this.dataStore.activeUser.subscribe((user) => {
      if (user.id) {
        const validateName = (control: AbstractControl) => {
          if (control.value === user.name) {
            return { unchanged: true };
          }
          return null;
        };

        this.userForm = this.fb.group({
          email: this.fb.control({ value: user.email, disabled: true }),
          roles: this.fb.control({
            value: this.getUserType(user.roles),
            disabled: true,
          }),
          name: this.fb.control(user.name, [Validators.required, validateName]),
        });

        this.loading = false;
      }
    });
  }

  submitForm(): void {
    if (this.userForm?.valid) {
      this.http
        .patch<IUser>('users', { name: this.userForm.value.name })
        .subscribe((updatedUser) => {
          this.dataStore.setActiveUser(updatedUser);
        });
    }
  }

  private getUserType(roles: string): string {
    switch (roles) {
      case 'user':
        return 'Basic User';
      case 'pro':
        return 'Premium Member';
      case 'admin':
        return 'Admin';
      case 'super_admin':
        return 'Super Admin';
      default:
        return '';
    }
  }
}
