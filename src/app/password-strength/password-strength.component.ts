import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent {
  password: string = '';
  strength: number = 0;

  onPasswordInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.password = input.value;
    this.calculateStrength();
  }

  calculateStrength(): void {
    const length = this.password.length;

    if (length === 0) {
      this.strength = 0;
    } else if (length < 8) {
      this.strength = 1;
    } else {
      const hasLetters = /[a-zA-Z]/.test(this.password);
      const hasDigits = /\d/.test(this.password);
      const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

      if (hasLetters && hasDigits && hasSymbols) {
        this.strength = 4;
      } else if (
        (hasLetters && hasDigits) ||
        (hasLetters && hasSymbols) ||
        (hasDigits && hasSymbols)
      ) {
        this.strength = 3;
      } else {
        this.strength = 2;
      }
    }
  }

  getStrengthClass(index: number): string {
    if (this.strength === 0) {
      return '';
    } else if (this.strength === 1) {
      return 'weak';
    } else if (this.strength === 2 && index === 0) {
      return 'weak';
    } else if (this.strength === 3 && index < 2) {
      return 'medium';
    } else if (this.strength === 4) {
      return 'strong';
    } else {
      return '';
    }
  }
}
