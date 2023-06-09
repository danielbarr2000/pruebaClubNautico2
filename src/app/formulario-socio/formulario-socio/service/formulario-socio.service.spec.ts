import { TestBed } from '@angular/core/testing';

import { FormularioSocioService } from './formulario-socio.service';

describe('FormularioSocioService', () => {
  let service: FormularioSocioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioSocioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
