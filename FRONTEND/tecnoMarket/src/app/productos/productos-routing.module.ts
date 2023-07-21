import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/productos/pages/layout-page/layout-page.component';
import { NuevoPageComponent } from './pages/productos/pages/nuevo-page/nuevo-page.component';
import { ListaPageComponent } from './pages/productos/pages/lista-page/lista-page.component';
import { ProductoPageComponent } from './pages/productos/pages/producto-page/producto-page.component';

// localhost:4200/productos
const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'new-product', component: NuevoPageComponent },
      { path: 'edit/:id', component: NuevoPageComponent },
      { path: 'list', component: ListaPageComponent },
      { path: ':id', component: ProductoPageComponent },
      { path: '**', redirectTo: 'list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
