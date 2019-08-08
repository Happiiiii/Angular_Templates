import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HheaderComponent } from './hheader.component';

describe('HheaderComponent', () => {
  let component: HheaderComponent;
  let fixture: ComponentFixture<HheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
