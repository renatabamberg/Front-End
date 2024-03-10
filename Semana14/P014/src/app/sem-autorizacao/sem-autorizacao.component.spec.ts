import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemAutorizacaoComponent } from './sem-autorizacao.component';

describe('SemAutorizacaoComponent', () => {
  let component: SemAutorizacaoComponent;
  let fixture: ComponentFixture<SemAutorizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SemAutorizacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SemAutorizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
