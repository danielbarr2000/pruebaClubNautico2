import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBarcoComponent } from './formulario-barco.component';

describe('FormularioBarcoComponent', () => {
  let component: FormularioBarcoComponent;
  let fixture: ComponentFixture<FormularioBarcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioBarcoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioBarcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
