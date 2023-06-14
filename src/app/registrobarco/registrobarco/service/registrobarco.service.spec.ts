import { TestBed } from '@angular/core/testing';

import { RegistrobarcoService } from './registrobarco.service';

describe('RegistrobarcoService', () => {
  let service: RegistrobarcoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrobarcoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
