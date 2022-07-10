import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  //Pass data to a child component
  @Input() product: Product | undefined;

  //Pass data to a parent component - Define emit event
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}

/*
Pass data to a parent component
*/
