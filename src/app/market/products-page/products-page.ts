import { Component } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryMenuComponent } from '../category-menu/category-menu';

/**
 * Products page component that displays category menu and handles category selection.
 * Acts as the parent component that manages the category list and user interactions.
 */
@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CategoryMenuComponent],
  templateUrl: './products-page.html',
})
export class ProductsPageComponent {
  /** List of available product categories */
  categoryList: Category[] = [
    { id: 1, name: 'Labubu' },
    { id: 2, name: 'Skullpanda' },
    { id: 3, name: 'Nyota' },
    { id: 4, name: 'Calico Critters' },
    { id: 5, name: 'Sonny Angels' }
  ];

  /**
   * Handles category selection events from the CategoryMenu component.
   * Displays an alert with the selected category name.
   * @param category The selected Category object
   */
  onCategorySelected(category: Category) {
    alert(`You selected: ${category.name}`);
  }
}