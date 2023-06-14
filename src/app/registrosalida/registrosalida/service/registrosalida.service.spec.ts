import { TestBed } from '@angular/core/testing';

import { RegistrosalidaService } from './registrosalida.service';

describe('RegistrosalidaService', () => {
  let service: RegistrosalidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrosalidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
