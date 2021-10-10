import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTypeButtonsComponent } from './search-type-buttons.component';

describe('SearchTypeButtonsComponent', () => {
  let component: SearchTypeButtonsComponent;
  let fixture: ComponentFixture<SearchTypeButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTypeButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTypeButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
