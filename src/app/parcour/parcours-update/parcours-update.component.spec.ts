import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcoursUpdateComponent } from './parcours-update.component';

describe('ParcoursUpdateComponent', () => {
  let component: ParcoursUpdateComponent;
  let fixture: ComponentFixture<ParcoursUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcoursUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcoursUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
