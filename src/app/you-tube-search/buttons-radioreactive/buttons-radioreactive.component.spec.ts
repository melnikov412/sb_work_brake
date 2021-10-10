import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsRadioreactiveComponent } from './buttons-radioreactive.component';

describe('ButtonsRadioreactiveComponent', () => {
  let component: ButtonsRadioreactiveComponent;
  let fixture: ComponentFixture<ButtonsRadioreactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsRadioreactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsRadioreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
