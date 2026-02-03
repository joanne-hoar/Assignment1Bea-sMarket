import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPageComponent } from './products-page';

describe('ProductsPageComponent', () => {
  let component: ProductsPageComponent;
  let fixture: ComponentFixture<ProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 5 categories', () => {
    expect(component.categoryList.length).toBe(5);
  });

  it('should have category list with correct names', () => {
    expect(component.categoryList[0].name).toBe('Labubu');
    expect(component.categoryList[4].name).toBe('Sonny Angels');
  });

  it('should call onCategorySelected method', () => {
    const testCategory = { id: 1, name: 'Test Category' };
    const originalAlert = window.alert;
    let alertCalled = false;
    let alertMessage = '';
    
    window.alert = (message: string) => {
      alertCalled = true;
      alertMessage = message;
    };

    component.onCategorySelected(testCategory);

    expect(alertCalled).toBe(true);
    expect(alertMessage).toBe('You selected: Test Category');
    
    window.alert = originalAlert;
  });

  it('should render CategoryMenu component', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-category-menu')).toBeTruthy();
  });

  it('should pass categories to CategoryMenu via property binding', () => {
    fixture.detectChanges();
    const categoryMenu = fixture.debugElement.nativeElement.querySelector('app-category-menu');
    expect(categoryMenu).toBeTruthy();
  });
});
