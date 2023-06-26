import { TestBed } from '@angular/core/testing';

import { CitasServiceService } from './citas-service.service';

describe('CitasServiceService', () => {
  let service: CitasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
