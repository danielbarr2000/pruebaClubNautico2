import { TestBed } from '@angular/core/testing';

import { FormularioBarcoService } from './formulario-barco.service';

describe('FormularioBarcoService', () => {
  let service: FormularioBarcoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioBarcoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
