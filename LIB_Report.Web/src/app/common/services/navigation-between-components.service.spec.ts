import {TestBed} from '@angular/core/testing';

import {NavigationBetweenComponentsService} from './navigation-between-components.service';

describe('NavigationBetweenComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavigationBetweenComponentsService = TestBed.get(NavigationBetweenComponentsService);
    expect(service).toBeTruthy();
  });
});
