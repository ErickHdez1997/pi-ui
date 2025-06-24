import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { setAuthorized } from '../auth.guard';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-date-entry',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './date-entry.component.html',
  styleUrls: ['./date-entry.component.css'],
})
export class DateEntryComponent {
  input = '';
  hasError = false;

  constructor(private readonly router: Router) {}

  checkKey() {
    this.hasError = this.input.trim() !== 'E+H=<3~110124';

    if (!this.hasError) {
      setAuthorized(true);
      this.router.navigateByUrl('/birthday');
    }
  }
}

