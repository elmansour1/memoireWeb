import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialisationDeleteComponent } from './specialisation-delete.component';

describe('SpecialisationDeleteComponent', () => {
  let component: SpecialisationDeleteComponent;
  let fixture: ComponentFixture<SpecialisationDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialisationDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialisationDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
