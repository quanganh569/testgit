import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexLikeComponent } from './index-like.component';

describe('IndexLikeComponent', () => {
  let component: IndexLikeComponent;
  let fixture: ComponentFixture<IndexLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
