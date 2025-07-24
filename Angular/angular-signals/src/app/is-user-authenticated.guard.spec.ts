import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isUserAuthenticatedGuard } from './is-user-authenticated.guard';

describe('isUserAuthenticatedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isUserAuthenticatedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
