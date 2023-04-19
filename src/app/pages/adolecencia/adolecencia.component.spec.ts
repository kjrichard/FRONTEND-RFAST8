import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdolecenciaComponent } from './adolecencia.component';

describe('AdolecenciaComponent', () => {
  let component: AdolecenciaComponent;
  let fixture: ComponentFixture<AdolecenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdolecenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdolecenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
