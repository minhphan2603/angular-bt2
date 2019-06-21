import { Component, OnInit } from '@angular/core';
import {ProductData} from '../../assets/ProductData';
@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent implements OnInit {

  ProductData: Array<Object> = ProductData;
  p: Number = 1;
  constructor() { }

  ngOnInit() {
  }
  themSanPham(MaSP,TenSP,Gia){
    this.ProductData.push({MaSP,TenSP,Gia});
  }
  xoaSanPham(i){
    this.ProductData.splice(i,1);
  }
}
