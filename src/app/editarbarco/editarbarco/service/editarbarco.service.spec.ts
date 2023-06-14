import { TestBed } from '@angular/core/testing';

import { EditarbarcoService } from './editarbarco.service';

describe('EditarbarcoService', () => {
  let service: EditarbarcoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditarbarcoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
