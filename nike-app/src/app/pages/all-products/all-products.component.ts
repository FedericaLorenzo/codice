import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product.type';
import { NikeService } from '../../services/nike.service';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { Category } from '../../models/category.type';
import { CategoryEnum } from '../../enum/category.enum';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { PathEnum } from '../../enum/path.enum';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [SideBarComponent, ProductCardComponent],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css',
})
export class AllProductsComponent {
  constructor(
    private route: ActivatedRoute,
    private nike: NikeService,
    private router: Router
  ) {}
  category: string;

  productList: Product[] = [];

  ngOnInit(): void {
    // this.category = this.route.snapshot.paramMap.get('category');
    this.route.params.subscribe((params) => {
      const category = params['category'];
      this.category = category;
      this.getProducts();
    });

    console.log(this.category);
  }

  getProducts() {
    if (this.category) {
      this.nike.getProductsByCategory(this.category).subscribe((res) => {
        this.productList = res;
        console.log(this.productList);
      });
    } else {
      this.nike.getAllProducts().subscribe((res) => {
        this.productList = res;
        console.log(this.productList);
      });
    }
  }

  goToDetail(id: number) {
    this.router.navigate([`/${PathEnum.DETAIL}`, id]);
  }
}
