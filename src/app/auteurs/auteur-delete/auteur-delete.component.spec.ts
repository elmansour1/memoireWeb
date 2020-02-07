import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuteurDeleteComponent } from './auteur-delete.component';

describe('AuteurDeleteComponent', () => {
  let component: AuteurDeleteComponent;
  let fixture: ComponentFixture<AuteurDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuteurDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuteurDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
