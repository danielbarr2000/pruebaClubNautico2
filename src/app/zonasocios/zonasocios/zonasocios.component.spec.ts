import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonasociosComponent } from './zonasocios.component';

describe('ZonasociosComponent', () => {
  let component: ZonasociosComponent;
  let fixture: ComponentFixture<ZonasociosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonasociosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonasociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
