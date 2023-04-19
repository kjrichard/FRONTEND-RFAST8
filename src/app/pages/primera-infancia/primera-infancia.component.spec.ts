import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraInfanciaComponent } from './primera-infancia.component';

describe('PrimeraInfanciaComponent', () => {
  let component: PrimeraInfanciaComponent;
  let fixture: ComponentFixture<PrimeraInfanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeraInfanciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeraInfanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
