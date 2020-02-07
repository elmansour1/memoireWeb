import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoireAddComponent } from './memoire-add.component';

describe('MemoireAddComponent', () => {
  let component: MemoireAddComponent;
  let fixture: ComponentFixture<MemoireAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoireAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoireAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
