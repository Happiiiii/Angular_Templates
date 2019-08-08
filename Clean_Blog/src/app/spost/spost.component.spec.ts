import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpostComponent } from './spost.component';

describe('SpostComponent', () => {
  let component: SpostComponent;
  let fixture: ComponentFixture<SpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
