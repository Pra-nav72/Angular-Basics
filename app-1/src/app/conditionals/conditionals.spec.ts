import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conditionals } from './conditionals';

describe('Conditionals', () => {
  let component: Conditionals;
  let fixture: ComponentFixture<Conditionals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conditionals],
    }).compileComponents();

    fixture = TestBed.createComponent(Conditionals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
