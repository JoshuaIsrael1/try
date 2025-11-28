import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-salon',
  imports: [CommonModule],
  templateUrl: './salon.component.html',
  styleUrl: './salon.component.scss'
})
export class SalonComponent implements OnInit {
  product: any
  constructor(
    private prod: ProductsService
  ) { }
  ngOnInit(): void {
    this.product = [this.prod.getUniqueProduct('Salon with Bocxy Ai')]
    console.log(this.product);

  }
}
