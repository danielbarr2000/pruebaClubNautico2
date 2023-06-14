import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrobarcoComponent } from './registrobarco.component';

describe('RegistrobarcoComponent', () => {
  let component: RegistrobarcoComponent;
  let fixture: ComponentFixture<RegistrobarcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrobarcoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrobarcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
