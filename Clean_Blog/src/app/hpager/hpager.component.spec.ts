import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HpagerComponent } from './hpager.component';

describe('HpagerComponent', () => {
  let component: HpagerComponent;
  let fixture: ComponentFixture<HpagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HpagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HpagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
