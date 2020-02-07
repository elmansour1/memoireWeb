import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialisationUpdateComponent } from './specialisation-update.component';

describe('SpecialisationUpdateComponent', () => {
  let component: SpecialisationUpdateComponent;
  let fixture: ComponentFixture<SpecialisationUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialisationUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialisationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
