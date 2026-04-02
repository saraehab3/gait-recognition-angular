import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  remember = false;
  showPass = false;
  loading = false;

  constructor(private router: Router) {}

  onSubmit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/otp']);
    }, 1200);
  }
}
