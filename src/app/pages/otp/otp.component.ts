import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {
  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;
  otp: string[] = ['', '', '', '', '', ''];
  loading = false;

  constructor(private router: Router) {}

  get isComplete(): boolean { return this.otp.every(d => d !== ''); }

  onInput(index: number, event: Event) {
    const input = event.target as HTMLInputElement;
    const val = input.value.replace(/\D/g, '').slice(-1);
    this.otp[index] = val;
    input.value = val;
    if (val && index < 5) {
      const next = this.otpInputs.toArray()[index + 1];
      next?.nativeElement.focus();
    }
  }

  onKeydown(index: number, event: KeyboardEvent) {
    if (event.key === 'Backspace' && !this.otp[index] && index > 0) {
      const prev = this.otpInputs.toArray()[index - 1];
      prev?.nativeElement.focus();
    }
  }

  onVerify() {
    if (!this.isComplete) return;
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/dashboard']);
    }, 1500);
  }
}
