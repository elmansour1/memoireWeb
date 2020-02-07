import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialisationListComponent } from './specialisation-list.component';

describe('SpecialisationListComponent', () => {
  let component: SpecialisationListComponent;
  let fixture: ComponentFixture<SpecialisationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialisationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialisationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
