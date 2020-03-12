import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherPdfComponent } from './afficher-pdf.component';

describe('AfficherPdfComponent', () => {
  let component: AfficherPdfComponent;
  let fixture: ComponentFixture<AfficherPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
