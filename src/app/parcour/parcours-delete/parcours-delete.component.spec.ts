import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcoursDeleteComponent } from './parcours-delete.component';

describe('ParcoursDeleteComponent', () => {
  let component: ParcoursDeleteComponent;
  let fixture: ComponentFixture<ParcoursDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcoursDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcoursDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
