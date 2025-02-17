import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarCitaModalComponent } from './agendar-cita-modal.component';

describe('AgendarCitaModalComponent', () => {
  let component: AgendarCitaModalComponent;
  let fixture: ComponentFixture<AgendarCitaModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendarCitaModalComponent]
    });
    fixture = TestBed.createComponent(AgendarCitaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
