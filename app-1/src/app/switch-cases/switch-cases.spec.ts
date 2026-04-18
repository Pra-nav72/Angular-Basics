import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCases } from './switch-cases';

describe('SwitchCases', () => {
  let component: SwitchCases;
  let fixture: ComponentFixture<SwitchCases>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchCases],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchCases);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
