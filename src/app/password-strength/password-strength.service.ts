import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  calculateStrength(password: string): number {
    if (password.length === 0) {
      return 0; // Empty password
    }
    if (password.length < 8) {
      return 1; // Password too short
    }

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (hasLetters && hasDigits && hasSymbols) {
      return 4; // Strong
    } else if (
      (hasLetters && hasDigits) ||
      (hasLetters && hasSymbols) ||
      (hasDigits && hasSymbols)
    ) {
      return 3; // Medium
    } else {
      return 2; // Easy
    }
  }
}
