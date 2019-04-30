import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestacaoContasPage } from './prestacao-contas.page';

describe('PrestacaoContasPage', () => {
  let component: PrestacaoContasPage;
  let fixture: ComponentFixture<PrestacaoContasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestacaoContasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestacaoContasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
