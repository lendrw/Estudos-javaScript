import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente05 } from './componente05';

describe('Componente05', () => {
  let component: Componente05;
  let fixture: ComponentFixture<Componente05>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente05]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente05);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
