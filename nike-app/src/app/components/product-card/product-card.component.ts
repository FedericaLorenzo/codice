import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.type';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { PathEnum } from '../../enum/path.enum';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product: Product;

  constructor() {}
}
