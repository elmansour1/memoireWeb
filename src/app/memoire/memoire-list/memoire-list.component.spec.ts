import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoireListComponent } from './memoire-list.component';

describe('MemoireListComponent', () => {
  let component: MemoireListComponent;
  let fixture: ComponentFixture<MemoireListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoireListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoireListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
