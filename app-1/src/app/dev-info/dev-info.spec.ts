import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevInfo } from './dev-info';

describe('DevInfo', () => {
  let component: DevInfo;
  let fixture: ComponentFixture<DevInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(DevInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
