import { Component, OnInit, Input } from '@angular/core';
import { products } from "../products";

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {
  products = products;

  @Input() categoryId!: number;
  remove(product: any){
    product.show = false;
  }
  like(product: any){
    product.like += 1;
  }
  share() {
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
