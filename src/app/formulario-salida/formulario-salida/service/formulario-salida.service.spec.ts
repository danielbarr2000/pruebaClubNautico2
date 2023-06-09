import { TestBed } from '@angular/core/testing';

import { FormularioSalidaService } from './formulario-salida.service';

describe('FormularioSalidaService', () => {
  let service: FormularioSalidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioSalidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
