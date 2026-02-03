import { Component } from '@angular/core';

/**
 * Global header component displayed across all pages.
 * Displays the market branding with custom name and styling.
 */
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {}