import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMenuComponent } from './category-menu';

describe('CategoryMenuComponent', () => {
  let component: CategoryMenuComponent;
  let fixture: ComponentFixture<CategoryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryMenuComponent);
    component = fixture.componentInstance;
    // Don't call detectChanges here - let individual tests control it
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should accept categories array as input', () => {
    const testCategories = [
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' }
    ];
    component.categories = testCategories;
    expect(component.categories.length).toBe(2);
    expect(component.categories[0].name).toBe('Category 1');
  });

  it('should render CategoryMenuItem components for each category', () => {
    const testCategories = [
      { id: 1, name: 'Cat 1' },
      { id: 2, name: 'Cat 2' },
      { id: 3, name: 'Cat 3' }
    ];
    component.categories = testCategories;
    fixture.detectChanges();

    const menuItems = fixture.nativeElement.querySelectorAll('app-category-menu-item');
    expect(menuItems.length).toBe(3);
  });

  it('should emit categorySelected event when child item is clicked', () => {
    let emittedCategory;
    const testCategory = { id: 1, name: 'Test' };

    component.categorySelected.subscribe((category) => {
      emittedCategory = category;
    });

    component.onItemClicked(testCategory);

    expect(emittedCategory).toEqual(testCategory);
  });
});
