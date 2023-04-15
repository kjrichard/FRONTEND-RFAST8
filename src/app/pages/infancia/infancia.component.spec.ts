import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfanciaComponent } from './infancia.component';

describe('InfanciaComponent', () => {
  let component: InfanciaComponent;
  let fixture: ComponentFixture<InfanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfanciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
