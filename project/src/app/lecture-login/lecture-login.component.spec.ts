import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureLoginComponent } from './lecture-login.component';

describe('LectureLoginComponent', () => {
  let component: LectureLoginComponent;
  let fixture: ComponentFixture<LectureLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LectureLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LectureLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
