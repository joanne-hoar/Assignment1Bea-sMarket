import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMenuItemComponent } from './category-menu-item';

describe('CategoryMenuItemComponent', () => {
  let component: CategoryMenuItemComponent;
  let fixture: ComponentFixture<CategoryMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryMenuItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryMenuItemComponent);
    component = fixture.componentInstance;
    // Don't call detectChanges here - let individual tests control it
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should accept categoryName as input', () => {
    const testName = 'Test Category';
    component.categoryName = testName;
    expect(component.categoryName).toBe(testName);
  });

  it('should display the category name in the template', () => {
    component.categoryName = 'Labubu';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent?.trim()).toContain('Labubu');
  });

  it('should emit itemClicked event when clicked', () => {
    let emittedValue: string | undefined;
    component.categoryName = 'Test Category';
    component.itemClicked.subscribe((value: string) => {
      emittedValue = value;
    });

    component.onItemClick();
    expect(emittedValue).toBe('Test Category');
  });

  it('should call onItemClick when div is clicked', () => {
    let clickHandled = false;
    component.itemClicked.subscribe(() => {
      clickHandled = true;
    });
    component.categoryName = 'Test';
    fixture.detectChanges();

    const div = fixture.nativeElement.querySelector('.category-item');
    div.click();

    expect(clickHandled).toBe(true);
  });

  it('should handle keyboard enter event', () => {
    let keyHandled = false;
    component.itemClicked.subscribe(() => {
      keyHandled = true;
    });
    component.categoryName = 'Test';
    fixture.detectChanges();

    const div = fixture.nativeElement.querySelector('.category-item');
    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    div.dispatchEvent(event);

    expect(keyHandled).toBe(true);
  });
});
