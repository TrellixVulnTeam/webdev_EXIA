import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { Category, categories } from '../categories';

@Component({
  selector: 'app-categories-product-list',
  templateUrl: './categories-product-list.component.html',
  styleUrls: ['./categories-product-list.component.css']
})

export class CategoriesProductListComponent implements OnInit {
  products = products;
  categories = categories;

  public categoryId !: number;


  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.categoryId = Number(routeParams.get('categoryId'));
  }

}
