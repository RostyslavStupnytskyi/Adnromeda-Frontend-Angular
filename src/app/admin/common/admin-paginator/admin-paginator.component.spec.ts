import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaginatorComponent } from './admin-paginator.component';

describe('AdminPaginatorComponent', () => {
  let component: AdminPaginatorComponent;
  let fixture: ComponentFixture<AdminPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPaginatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
