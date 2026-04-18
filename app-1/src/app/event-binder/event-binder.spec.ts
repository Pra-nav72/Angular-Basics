import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBinder } from './event-binder';

describe('EventBinder', () => {
  let component: EventBinder;
  let fixture: ComponentFixture<EventBinder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBinder],
    }).compileComponents();

    fixture = TestBed.createComponent(EventBinder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
