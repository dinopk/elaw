import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterComponentsComponent } from './master-components.component';

describe('MasterComponentsComponent', () => {
  let component: MasterComponentsComponent;
  let fixture: ComponentFixture<MasterComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
