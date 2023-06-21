import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

import { SignUpQuery } from 'src/app/shared/models/api/signUpQuery';
import { AuthService } from 'src/app/shared/services/api/auth.service';
import { matchValidator } from 'src/app/shared/validators/match.validator';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  protected signUpQuery: SignUpQuery = <SignUpQuery>{};
  protected signUpForm = this.formBuilder.group({
    email: ["", {
      validators: [Validators.required, Validators.email],
      nonNullable: true
    }],
    userName: ["", {
      validators: [Validators.required],
      nonNullable: true,
    }],
    password: ["", {
      validators: [Validators.required]
    }],
    confirmPassword: ["", {
      validators: [Validators.required]
    }],
  }, {
    validators: [matchValidator("password", "confirmPassword", "passwordNoMatch")]
  });

  constructor(
    protected authService: AuthService,
    protected formBuilder: FormBuilder,
    protected router: Router
  ) { }

  onSubmit() {
    this.signUpQuery = <SignUpQuery>this.signUpForm.value;

    this.authService.apiAuthAuthSignUpPost(this.signUpQuery)
      .subscribe(() => {
        window.location.reload();
      })
  }
}
