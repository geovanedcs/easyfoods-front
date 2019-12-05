import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TamanhoMarmitaFormComponent } from './tamanho-marmita-form.component';

describe('TamanhoMarmitaFormComponent', () => {
  let component: TamanhoMarmitaFormComponent;
  let fixture: ComponentFixture<TamanhoMarmitaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TamanhoMarmitaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TamanhoMarmitaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
