import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialisationEditComponent } from './specialisation-edit.component';

describe('SpecialisationEditComponent', () => {
  let component: SpecialisationEditComponent;
  let fixture: ComponentFixture<SpecialisationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialisationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialisationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
