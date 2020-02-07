import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuteurUpdateComponent } from './auteur-update.component';

describe('AuteurUpdateComponent', () => {
  let component: AuteurUpdateComponent;
  let fixture: ComponentFixture<AuteurUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuteurUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuteurUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
