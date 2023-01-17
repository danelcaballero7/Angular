import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCaclculadoraComponent } from './mini-caclculadora.component';

describe('MiniCaclculadoraComponent', () => {
  let component: MiniCaclculadoraComponent;
  let fixture: ComponentFixture<MiniCaclculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCaclculadoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniCaclculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
