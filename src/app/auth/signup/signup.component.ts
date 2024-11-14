import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms'
import { response } from 'express';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,ReactiveFormsModule,NgIf, MatInputModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  // user = {
  //   username: '',
  //   email: '',
  //   password: ''
  // };

  // constructor(private authService: AuthService) {}

  // onSignup() {
  //   this.authService.register(this.user).subscribe({ next: (response)=>{
  //     console.log('Signup successful:', response);

  //   },
  //   error: (error) => {
  //     console.error('Signup Failed', error);
  //   }
  //   });
  // }

  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('User signed up:', this.signupForm.value);
      alert('Signup successful!');
      this.signupForm.reset();
    }
  }

}
