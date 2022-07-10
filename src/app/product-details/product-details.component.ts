import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  /* 1. Inject ActivatedRoute into the constructor() by adding private route: ActivatedRoute as an argument within the constructor's parentheses.
  2. ActivatedRoute contains information about the route and the route's parameters.
  */
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    /* 
    1. First get the product id from the current route.
    2. We use route.snapshot, which is the ActivatedRouteSnapshot that contains information about the active route at that particular moment in time. The URL that matches the route provides the productId
    */
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //Find the product that correspond with the id provided in route.
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
