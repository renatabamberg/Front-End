import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioComumComponent } from './template-driven.component';

describe('FormularioComumComponent', () => {
  let component: FormularioComumComponent;
  let fixture: ComponentFixture<FormularioComumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioComumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioComumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
