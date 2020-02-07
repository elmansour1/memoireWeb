import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuteurAddComponent } from './auteur-add.component';

describe('AuteurAddComponent', () => {
  let component: AuteurAddComponent;
  let fixture: ComponentFixture<AuteurAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuteurAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuteurAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
