import { TestBed } from '@angular/core/testing';

import { TypeCarburantService } from './type-carburant.service';

describe('TypeCarburantService', () => {
  let service: TypeCarburantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeCarburantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
