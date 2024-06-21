import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { Product } from '../../models/product.type';
import { NikeService } from '../../services/nike.service';
import { Category } from '../../models/category.type';
import { CategoryCardComponent } from '../../components/category-card/category-card.component';
import { MemberCardComponent } from '../../components/member-card/member-card.component';
import { Member } from '../../models/member.type';
import { CardSliderComponent } from '../../components/card-slider/card-slider.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, CategoryCardComponent, MemberCardComponent, CardSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  productList: Product[] = []

  categoryList: Category[] = [
    {
      immagine: "../../../assets/Home-media/basket.jpg",
      link: "/products/Basket",
      nome: "Basket",
    },
    {
      immagine: "../../../assets/Home-media/running.jpg",
      link: "/products/Running",
      nome: "Running",
    },
    {
      immagine: "../../../assets/Home-media/training.jpg",
      link: "/products/Training",
      nome: "Training",
    },
    {
      immagine: "../../../assets/Home-media/trail-running.jpg",
      link: "/products/Trail-running",
      nome: "Trail Running",
    },
    {
      immagine: "../../../assets/Home-media/sneakers.jpg",
      link: "/products/Sneakers",
      nome: "Sneakers",
    },
  ]

  memberList: Member[] = [
    {
      immagine: "../../../assets/Home-media/banner_2.jpg",
      titolo: "Accesso esclusivo su misura per te",
      sottotitolo: "Prodotti per i member",
      callToAction: "Acquista"
    },
    {
      immagine: "../../../assets/Home-media/banner_5.jpg",
      titolo: "Il nostro modo di ringraziarti",
      sottotitolo: "Ricompense per i member",
      callToAction: "Celebra"
    },
    {
      immagine: "../../../assets/Home-media/banner_6.jpg",
      titolo: "Per fare movimento ovunque",
      sottotitolo: "Sport e benessere",
      callToAction: "Inizia a muoverti"
    },
    {
      immagine: "../../../assets/Home-media/banner_3.jpg",
      titolo: "Crea modelli unici",
      sottotitolo: "Nike By You",
      callToAction: "Personalizza"
    },

  ]


  constructor(private nike: NikeService) {
  }

  ngOnInit(): void {
    this.nike.getAllProducts().subscribe(res => {
      const list = []

      for (const product of res) {
        if (product.nuovo_arrivi == true) {
          list.push(product)
        }
      }

      this.productList = list
    })

  }


}
