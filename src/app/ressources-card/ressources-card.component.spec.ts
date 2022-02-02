import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourcesCardComponent } from './ressources-card.component';

describe('RessourcesCardComponent', () => {
  let component: RessourcesCardComponent;
  let fixture: ComponentFixture<RessourcesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RessourcesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RessourcesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
