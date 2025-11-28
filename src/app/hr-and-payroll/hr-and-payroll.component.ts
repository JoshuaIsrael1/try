import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hr-and-payroll',
  imports: [CommonModule],
  templateUrl: './hr-and-payroll.component.html',
  styleUrl: './hr-and-payroll.component.scss'
})
export class HrAndPayrollComponent implements OnInit {
  product: any
  constructor(
    private prod: ProductsService
  ) { }
  ngOnInit(): void {
    this.product = [this.prod.getUniqueProduct('HR & Payroll')]
    console.log(this.product);

  }
}
