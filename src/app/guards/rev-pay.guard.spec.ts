import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { revPayGuard } from './rev-pay.guard';

describe('revPayGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => revPayGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
