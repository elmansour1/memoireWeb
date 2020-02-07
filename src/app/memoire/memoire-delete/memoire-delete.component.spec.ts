import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoireDeleteComponent } from './memoire-delete.component';

describe('MemoireDeleteComponent', () => {
  let component: MemoireDeleteComponent;
  let fixture: ComponentFixture<MemoireDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoireDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoireDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
