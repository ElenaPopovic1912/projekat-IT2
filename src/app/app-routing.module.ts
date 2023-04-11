import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { AdminLayoutComponent } from './admin/layout/admin-layout.component';
import { ProductDetailsComponent } from './admin/product/product-details/product-details.component';
import { ProductComponent } from './admin/product/product.component';
import { IndexComponent } from './web/index/index.component';
import { WebLayoutComponent } from './web/layout/web-layout.component';

const routes = [
  {
    path: '',
    component: WebLayoutComponent,
    children: [
      { path: '', component: IndexComponent }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'product', component: ProductComponent },
      { path: 'product/add', component: ProductDetailsComponent },
      { path: 'product/edit/:id', component: ProductDetailsComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
