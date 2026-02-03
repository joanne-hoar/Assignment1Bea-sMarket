import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../../models/category';
import { CategoryMenuItemComponent } from '../category-menu-item/category-menu-item';

/**
 * Container component that displays a menu of category items.
 * Receives categories from parent and emits selection events back up.
 * Uses modern Angular @for control flow to render CategoryMenuItem components.
 */
@Component({
  selector: 'app-category-menu',
  standalone: true,
  imports: [CommonModule, CategoryMenuItemComponent],
  templateUrl: './category-menu.html',
})
export class CategoryMenuComponent {
  /** Array of categories received from parent component via property binding */
  @Input() categories: Category[] = [];
  
  /** Emits the selected category to parent component via event binding */
  @Output() categorySelected = new EventEmitter<Category>();

  /**
   * Handles click events from child CategoryMenuItem components.
   * Re-emits the category selection event to the parent component.
   * @param category The category that was clicked
   */
  onItemClicked(category: Category) {
    this.categorySelected.emit(category);
  }
}