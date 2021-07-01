import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordAdminComponent } from './dashbord-admin.component';

describe('BoardAdminComponent', () => {
  let component: DashbordAdminComponent;
  let fixture: ComponentFixture<DashbordAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
