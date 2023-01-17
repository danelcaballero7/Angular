import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicaEmpleadoCComponent } from './caracteristica-empleado-c.component';

describe('CaracteristicaEmpleadoCComponent', () => {
  let component: CaracteristicaEmpleadoCComponent;
  let fixture: ComponentFixture<CaracteristicaEmpleadoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristicaEmpleadoCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracteristicaEmpleadoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
