import { NgIf, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

import { SignInQuery } from 'src/app/shared/models/api/signInQuery';
import { AuthService } from 'src/app/shared/services/api/auth.service';
import { AppAuthService } from 'src/app/core/services/app.auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgFor,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  protected signInQuery: SignInQuery = <SignInQuery>{};
  protected signInForm = this.formBuilder.group({
    email: ["", {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }],
    password: ["", {
      validators: [Validators.required],
      nonNullable: true,
    }]
  });

  constructor(
    protected authService: AuthService,
    protected appAuthService: AppAuthService,
    protected formBuilder: FormBuilder,
    protected router: Router) { }

  onSubmit() {
    this.signInQuery = <SignInQuery>this.signInForm.value;

    this.authService.apiAuthAuthSignInPost(this.signInQuery)
      .subscribe(async response => {
        await this.appAuthService.login(response.value!)
        this.router.navigate(['/']);
      });
  }
}
