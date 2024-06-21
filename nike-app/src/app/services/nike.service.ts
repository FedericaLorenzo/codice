import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { prodotti } from '../../assets/json/updated_products'
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.type';


@Injectable({
  providedIn: 'root'
})
export class NikeService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3000/prodotti")
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:3000/prodotti?categoria=${category}`)
  }


  getSingleProduct(id:number): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:3000/prodotti?id=${id}`)
  }
}
