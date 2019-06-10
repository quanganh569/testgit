import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexShareComponent } from './index-share.component';

describe('IndexShareComponent', () => {
  let component: IndexShareComponent;
  let fixture: ComponentFixture<IndexShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
