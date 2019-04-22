import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonMenuTabComponent } from './botton-menu-tab.component';

describe('BottonMenuTabComponent', () => {
  let component: BottonMenuTabComponent;
  let fixture: ComponentFixture<BottonMenuTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottonMenuTabComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottonMenuTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
