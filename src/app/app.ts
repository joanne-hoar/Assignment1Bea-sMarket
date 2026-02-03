import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header';
import { ProductsPageComponent } from './market/products-page/products-page';

/**
 * Root component of Bea's Market application.
 * Serves as the main container that holds the header and products page components.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ProductsPageComponent],
  templateUrl: './app.html',
})
export class AppComponent {}