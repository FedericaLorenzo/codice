import { Component, OnInit } from '@angular/core';
import { CartOverlayComponent } from '../../components/cart-overlay/cart-overlay.component';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { NikeService } from '../../services/nike.service';
import { Product } from '../../models/product.type';
import { CurrencyPipe, NgClass } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CartOverlayComponent, CurrencyPipe, ReactiveFormsModule, NgClass],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {

singleProduct!: Product

selectedProductInfo = {
  size: null,
  color: null,
product : null
}

  constructor(private route: ActivatedRoute, private nikeService: NikeService) {

  }

formScarpa = new FormGroup ({
  size: new FormControl ('', [Validators.required]),
  color: new FormControl ('', [Validators.required])
})

onSearch(){
this.selectedProductInfo.size= this.formScarpa.get('size')!.value!
this.selectedProductInfo.color= this.formScarpa.get('color')!.value!
this.selectedProductInfo.product= this.singleProduct

console.log(this.selectedProductInfo)
}

  ngOnInit() {

    this.route.params
    .pipe(
      switchMap((params) => this.nikeService.getSingleProduct(params['id']))
    ).subscribe((details) => {
      console.log(details)
      this.singleProduct = details[0];
    })

  }


  
}





