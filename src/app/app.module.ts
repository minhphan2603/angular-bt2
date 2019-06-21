import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductManagementModule } from './product-management/product-management.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductManagementModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
