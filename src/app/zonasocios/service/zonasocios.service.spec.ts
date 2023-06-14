import { TestBed } from '@angular/core/testing';

import { ZonasociosService } from './zonasocios.service';

describe('ZonasociosService', () => {
  let service: ZonasociosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZonasociosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
