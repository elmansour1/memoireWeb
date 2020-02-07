import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcoursEditComponent } from './parcours-edit.component';

describe('ParcoursEditComponent', () => {
  let component: ParcoursEditComponent;
  let fixture: ComponentFixture<ParcoursEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcoursEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcoursEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
