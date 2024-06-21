import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryEnum } from '../../enum/category.enum';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  constructor(private router: Router, private fb: FormBuilder) {}

  CategoryEnum = CategoryEnum;

  clickCategoryHandler(category: CategoryEnum) {
    this.router.navigate(['products', category]);
  }

  colorForm = this.fb.group({
    black: [false],
    blue: [false],
    brown: [false],
    green: [false],
    gray: [false],
    multicolor: [false],
    orange: [false],
    pink: [false],
    purple: [false],
    red: [false],
    white: [false],
    yellow: [false],
  });
}
