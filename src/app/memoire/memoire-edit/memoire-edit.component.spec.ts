import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoireEditComponent } from './memoire-edit.component';

describe('MemoireEditComponent', () => {
  let component: MemoireEditComponent;
  let fixture: ComponentFixture<MemoireEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoireEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoireEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
