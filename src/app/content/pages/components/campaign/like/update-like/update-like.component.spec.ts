import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLikeComponent } from './update-like.component';

describe('UpdateLikeComponent', () => {
  let component: UpdateLikeComponent;
  let fixture: ComponentFixture<UpdateLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
