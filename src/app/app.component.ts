import { Component } from '@angular/core';
import { GmorphFormComponent } from './gmorph-form/gmorph-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GmorphFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-assignment';
}
