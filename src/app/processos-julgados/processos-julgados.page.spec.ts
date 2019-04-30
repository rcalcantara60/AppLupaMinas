import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessosJulgadosPage } from './processos-julgados.page';

describe('ProcessosJulgadosPage', () => {
  let component: ProcessosJulgadosPage;
  let fixture: ComponentFixture<ProcessosJulgadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessosJulgadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessosJulgadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
