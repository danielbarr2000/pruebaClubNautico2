import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosalidaComponent } from './registrosalida.component';

describe('RegistrosalidaComponent', () => {
  let component: RegistrosalidaComponent;
  let fixture: ComponentFixture<RegistrosalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrosalidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrosalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
