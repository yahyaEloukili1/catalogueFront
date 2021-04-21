import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from "../../src/app/components/products/products.component";
import { NewProductComponent } from "../../src/app/components/new-product/new-product.component";


const routes: Routes = [
  {path: "products", component: ProductsComponent},
  {path: "newProduct", component: NewProductComponent},
  {path: "", redirectTo: '/products', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
