import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskDirective,
    MatCardModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  ],
  providers: [provideNgxMask()],
})
export class AppComponent {
  userForm: FormGroup;
  submitted = false;
  apiResponse: any;
  totalErrors = 0;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(9)]],
      password: ['', [Validators.required, this.strongPasswordValidator]],
    });

    this.userForm.statusChanges.subscribe(() => {
      this.updateErrorCount();
    });
  }

  updateErrorCount() {
    this.totalErrors = Object.keys(this.userForm.controls).filter(
      (key) => this.userForm.get(key)?.errors
    ).length;
  }

  strongPasswordValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumbers = /[0-9]/.test(value);

    return hasUpperCase && hasLowerCase && hasNumbers
      ? null
      : { weakPassword: true };
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.userForm.valid) {
      this.http
        .post('https://jsonplaceholder.typicode.com/posts', this.userForm.value)
        .subscribe({
          next: (response) => (this.apiResponse = response),
          error: (error) => console.error('Erro de API', error),
        });
    }
  }
  
  get f() {
    return this.userForm.controls;
  }
}
