import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { lecturerGuard } from './lecturer.guard';

describe('lecturerGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => lecturerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
