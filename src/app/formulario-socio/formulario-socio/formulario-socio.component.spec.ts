import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSocioComponent } from './formulario-socio.component';

describe('FormularioSocioComponent', () => {
  let component: FormularioSocioComponent;
  let fixture: ComponentFixture<FormularioSocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioSocioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
