import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerloginComponent } from './bannerlogin.component';

describe('BannerloginComponent', () => {
  let component: BannerloginComponent;
  let fixture: ComponentFixture<BannerloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
