import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TamanhoMarmitaComponent } from './tamanho-marmita.component';

describe('TamanhoMarmitaComponent', () => {
  let component: TamanhoMarmitaComponent;
  let fixture: ComponentFixture<TamanhoMarmitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TamanhoMarmitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TamanhoMarmitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
