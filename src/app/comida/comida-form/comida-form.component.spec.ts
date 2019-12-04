import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaFormComponent } from './comida-form.component';

describe('ComidaFormComponent', () => {
  let component: ComidaFormComponent;
  let fixture: ComponentFixture<ComidaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComidaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
