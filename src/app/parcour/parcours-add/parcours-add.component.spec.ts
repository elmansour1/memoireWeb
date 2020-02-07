import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcoursAddComponent } from './parcours-add.component';

describe('ParcoursAddComponent', () => {
  let component: ParcoursAddComponent;
  let fixture: ComponentFixture<ParcoursAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcoursAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcoursAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
