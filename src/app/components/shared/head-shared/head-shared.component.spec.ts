import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadSharedComponent } from './head-shared.component';

describe('HeadSharedComponent', () => {
  let component: HeadSharedComponent;
  let fixture: ComponentFixture<HeadSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
