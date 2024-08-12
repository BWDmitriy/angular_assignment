import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthComponent } from '../password-strength/password-strength.component';
import { InputComponent } from '../input/input.component';
import { CommonModule } from '@angular/common';
import VanillaTilt from 'vanilla-tilt';

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
export class GmorphFormComponent implements OnInit, AfterViewInit {
  form: FormGroup = new FormGroup({});

  @ViewChildren('card') cards: QueryList<ElementRef> =
    new QueryList<ElementRef>();

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      this.cards.changes.subscribe((cards: QueryList<ElementRef>) => {
        const elements = cards.toArray().map((card) => card.nativeElement);
        if (elements.length > 0) {
          VanillaTilt.init(elements, {
            max: 15,
            speed: 400,
            glare: true,
            'max-glare': 0.5,
          });
        }
      });

      const elements = this.cards.toArray().map((card) => card.nativeElement);
      if (elements.length > 0) {
        VanillaTilt.init(elements, {
          max: 15,
          speed: 400,
          glare: true,
          'max-glare': 0.5,
        });
      }
    }
  }
}
