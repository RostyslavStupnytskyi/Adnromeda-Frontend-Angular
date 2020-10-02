import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTableElementComponent } from './category-table-element.component';

describe('CategoryTableElementComponent', () => {
  let component: CategoryTableElementComponent;
  let fixture: ComponentFixture<CategoryTableElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryTableElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTableElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
