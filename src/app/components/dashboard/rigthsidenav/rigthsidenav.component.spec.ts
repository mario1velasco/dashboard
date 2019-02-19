import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RigthsidenavComponent } from './rigthsidenav.component';

describe('RigthsidenavComponent', () => {
  let component: RigthsidenavComponent;
  let fixture: ComponentFixture<RigthsidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RigthsidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RigthsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
