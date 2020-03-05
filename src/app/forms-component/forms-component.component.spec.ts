import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsComponentComponent } from './forms-component.component';

describe('FormsComponentComponent', () => {
  let component: FormsComponentComponent;
  let fixture: ComponentFixture<FormsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
