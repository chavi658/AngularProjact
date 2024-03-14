import { CanActivateFn } from '@angular/router';

export const courseDetailsGuard: CanActivateFn = (route, state) => {
  return false;
};
