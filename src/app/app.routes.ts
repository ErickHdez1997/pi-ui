import { Routes } from '@angular/router';
import { DateEntryComponent } from './date-entry/date-entry.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: DateEntryComponent,
  },
  {
    path: 'birthday',
    component: BirthdayComponent,
    canActivate: [authGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
