import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  calculateStrength(password: string): number {
    if (length === 0) {
      return 0;
    } else if (length < 8) {
      return 1;
    } else {
      const hasLetters = /[a-zA-Z]/.test(password);
      const hasDigits = /\d/.test(password);
      const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

      if (hasLetters && hasDigits && hasSymbols) {
        return 4;
      } else if (
        (hasLetters && hasDigits) ||
        (hasLetters && hasSymbols) ||
        (hasDigits && hasSymbols)
      ) {
        return 3;
      } else {
        return 2;
      }
    }
  }
}
