import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CategoryCardComponent } from '../category-card/category-card.component';
import { MemberCardComponent } from '../member-card/member-card.component';
import { PathEnum } from '../../enum/path.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-slider',
  standalone: true,
  imports: [ProductCardComponent, CategoryCardComponent, MemberCardComponent],
  templateUrl: './card-slider.component.html',
  styleUrl: './card-slider.component.css',
})
export class CardSliderComponent {
  @Input() list = [];
  @Input() titolo: string = '';

  @ViewChild('cardContainer') public cardContainer: ElementRef<any>;
  @ViewChildren('singleCard') public singleCardArray: QueryList<
    ElementRef<any>
  >;
  currentSlide = 0;
  isNextDisabled = false;
  isPrevDisabled = true;

  constructor(private router: Router) {}

  checkDisableStatus() {
    if (!this.singleCardArray) {
      this.isNextDisabled = false;
      this.isPrevDisabled = true;
    } else {
      const totalCards = this.singleCardArray.toArray().length;
      this.isNextDisabled = this.currentSlide >= totalCards - 3;
      this.isPrevDisabled = this.currentSlide === 0;
    }
  }

  prev() {
    const cardWidth = this.singleCardArray.first.nativeElement.offsetWidth;
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.cardContainer.nativeElement.scrollTo({
        left: this.currentSlide * cardWidth, //parti dalla slide attuale e vai indietro di quanto occupa 1 slide
        behavior: 'smooth',
      });
    }
    this.checkDisableStatus();
  }

  next() {
    const cardWidth = this.singleCardArray.first.nativeElement.offsetWidth;
    this.currentSlide++;
    this.cardContainer.nativeElement.scrollTo({
      left: this.currentSlide * cardWidth, //parti dalla slide attuale e vai indietro di quanto occupa 1 slide
      behavior: 'smooth',
    });

    this.checkDisableStatus();
  }

  goToCategory(category: string) {
    this.router.navigate([`/${PathEnum.PRODUCTS}`, category]);
  }
  goToDetail(id: number) {
    this.router.navigate([`/${PathEnum.DETAIL}`, id]);
  }
}
