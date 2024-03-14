import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { courseDetailsGuard } from './course-details.guard';

describe('courseDetailsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => courseDetailsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
