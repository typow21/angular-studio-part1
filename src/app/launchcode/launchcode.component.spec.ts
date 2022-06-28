import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchcodeComponent } from './launchcode.component';

describe('LaunchcodeComponent', () => {
  let component: LaunchcodeComponent;
  let fixture: ComponentFixture<LaunchcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
