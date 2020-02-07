import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoireUpdateComponent } from './memoire-update.component';

describe('MemoireUpdateComponent', () => {
  let component: MemoireUpdateComponent;
  let fixture: ComponentFixture<MemoireUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoireUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoireUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
