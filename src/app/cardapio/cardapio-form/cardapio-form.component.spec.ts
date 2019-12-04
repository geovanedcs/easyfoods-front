import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioFormComponent } from './cardapio-form.component';

describe('CardapioFormComponent', () => {
  let component: CardapioFormComponent;
  let fixture: ComponentFixture<CardapioFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardapioFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardapioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
