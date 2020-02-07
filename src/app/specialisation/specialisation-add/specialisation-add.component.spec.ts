import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialisationAddComponent } from './specialisation-add.component';

describe('SpecialisationAddComponent', () => {
  let component: SpecialisationAddComponent;
  let fixture: ComponentFixture<SpecialisationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialisationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialisationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
