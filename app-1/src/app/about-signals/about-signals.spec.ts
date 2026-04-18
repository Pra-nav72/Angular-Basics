import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSignals } from './about-signals';

describe('AboutSignals', () => {
  let component: AboutSignals;
  let fixture: ComponentFixture<AboutSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSignals],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutSignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
