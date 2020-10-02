import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCreatorComponent } from './category-creator.component';

describe('CategoryCreatorComponent', () => {
  let component: CategoryCreatorComponent;
  let fixture: ComponentFixture<CategoryCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
