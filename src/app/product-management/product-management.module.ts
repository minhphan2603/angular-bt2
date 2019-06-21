import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagementComponent } from './product-management.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [ProductManagementComponent],
  exports: [ProductManagementComponent],
  imports: [
    CommonModule,
    NgxPaginationModule
  ]
})
export class ProductManagementModule { }
