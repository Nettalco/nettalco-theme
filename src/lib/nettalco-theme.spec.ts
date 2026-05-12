import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NettalcoTheme } from './nettalco-theme';

describe('NettalcoTheme', () => {
  let component: NettalcoTheme;
  let fixture: ComponentFixture<NettalcoTheme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NettalcoTheme]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NettalcoTheme);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
