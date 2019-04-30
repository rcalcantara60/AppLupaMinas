import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaDespesaPage } from './receita-despesa.page';

describe('ReceitaDespesaPage', () => {
  let component: ReceitaDespesaPage;
  let fixture: ComponentFixture<ReceitaDespesaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitaDespesaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaDespesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
