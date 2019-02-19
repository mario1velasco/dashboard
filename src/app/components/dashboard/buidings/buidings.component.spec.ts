import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuidingsComponent } from './buidings.component';

describe('BuidingsComponent', () => {
  let component: BuidingsComponent;
  let fixture: ComponentFixture<BuidingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuidingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuidingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
