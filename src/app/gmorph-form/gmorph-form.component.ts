import { Component, OnInit } from '@angular/core';
import { PasswordStrengthComponent } from '../password-strength/password-strength.component';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-gmorph-form',
  templateUrl: './gmorph-form.component.html',
  styleUrls: ['./gmorph-form.component.css'],
  standalone: true,
  imports: [PasswordStrengthComponent],
})
export class GmorphFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const elements = Array.from(
      document.querySelectorAll('.card')
    ) as HTMLElement[];

    VanillaTilt.init(elements, {
      max: 15,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });
  }
}
