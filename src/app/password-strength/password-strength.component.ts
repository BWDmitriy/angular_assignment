import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PasswordStrengthService } from './password-strength.service';
@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordStrengthComponent),
      multi: true,
    },
  ],
  standalone: true,
})
export class PasswordStrengthComponent implements ControlValueAccessor {
  value: string = '';
  strength: number = 0;
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
    this.updateStrength();
  }

  updateStrength(): void {
    this.strength = this.passwordStrengthService.calculateStrength(this.value);
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
