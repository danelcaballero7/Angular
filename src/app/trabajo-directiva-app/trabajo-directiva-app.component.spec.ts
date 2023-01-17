import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoDirectivaAppComponent } from './trabajo-directiva-app.component';

describe('TrabajoDirectivaAppComponent', () => {
  let component: TrabajoDirectivaAppComponent;
  let fixture: ComponentFixture<TrabajoDirectivaAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajoDirectivaAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajoDirectivaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
