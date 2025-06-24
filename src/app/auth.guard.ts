import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

let authorized = false;

export const setAuthorized = (val: boolean) => {
  authorized = val;
};

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  if (!authorized) {
    router.navigateByUrl('/');
    return false;
  }
  return true;
};