import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacaoPage } from './educacao.page';

describe('EducacaoPage', () => {
  let component: EducacaoPage;
  let fixture: ComponentFixture<EducacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
