import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login({ username: this.username, password: this.password })
      .subscribe(response => {
        console.log('Login Successful', response);
      }, error => {
        console.error('Login Failed', error);
      });
  }
  

}
