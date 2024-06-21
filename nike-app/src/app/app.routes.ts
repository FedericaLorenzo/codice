import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { PathEnum } from './enum/path.enum';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: `${PathEnum.HOME}`,
    component: HomeComponent,
  },
  {
    path: `${PathEnum.PRODUCTS}`,
    component: AllProductsComponent,
  },
  {
    path: `${PathEnum.PRODUCTS}/:category`,
    component: AllProductsComponent,
  },
  {
    path: `${PathEnum.DETAIL}/:id`,
    component: ProductDetailComponent,
  },
];
