import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';
  role = '';
  showPass = false;
  loading = false;
  roles = ['Admin', 'Researcher', 'Security Officer'];

  constructor(private router: Router) {}

  onSubmit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/otp']);
    }, 1200);
  }
}
