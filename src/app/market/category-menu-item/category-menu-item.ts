import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Individual category menu item component.
 * Displays a single category and emits click events when selected.
 * Includes keyboard accessibility support for better user experience.
 */
@Component({
  selector: 'app-category-menu-item',
  standalone: true,
  templateUrl: './category-menu-item.html',
  styleUrls: ['./category-menu-item.css']
})
export class CategoryMenuItemComponent {
  /** Name of the category to display, received from parent */
  @Input() categoryName = '';
  
  /** Emits the category name when the item is clicked */
  @Output() itemClicked = new EventEmitter<string>();

  /**
   * Handles click and keyboard events on the category item.
   * Emits the categoryName to the parent component.
   */
  onItemClick() {
    this.itemClicked.emit(this.categoryName);
  }
}