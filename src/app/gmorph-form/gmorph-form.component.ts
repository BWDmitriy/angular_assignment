import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { PasswordStrengthComponent } from '../password-strength/password-strength.component';
import VanillaTilt from 'vanilla-tilt';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-gmorph-form',
  templateUrl: './gmorph-form.component.html',
  styleUrls: ['./gmorph-form.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PasswordStrengthComponent,
    InputComponent,
  ],
})
export class GmorphFormComponent implements OnInit {
  form: FormGroup;

  @ViewChildren('card') cards: QueryList<ElementRef>;

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });

    this.cards.changes.subscribe((cards: QueryList<ElementRef>) => {
      const elements = cards.toArray().map((card) => card.nativeElement);
      VanillaTilt.init(elements, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
      });
    });
  }
}
