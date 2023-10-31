import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonMobileComponent } from './pokemon-mobile.component';

describe('PokemonMobileComponent', () => {
  let component: PokemonMobileComponent;
  let fixture: ComponentFixture<PokemonMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
