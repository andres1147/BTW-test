import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductosRoutingModule } from './productos-routing.module';
import { MaterialModule } from '../material/material.module';

import { ProductoPageComponent } from './pages/productos/pages/producto-page/producto-page.component';
import { LayoutPageComponent } from './pages/productos/pages/layout-page/layout-page.component';
import { ListaPageComponent } from './pages/productos/pages/lista-page/lista-page.component';
import { NuevoPageComponent } from './pages/productos/pages/nuevo-page/nuevo-page.component';
import { ProductCardComponent } from './componentes/product-card/product-card.component';
import { ProductoImagePipe } from './pipes/producto-image.pipe';
import { ConfirmDialogComponent } from './componentes/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    ProductoPageComponent,
    LayoutPageComponent,
    ListaPageComponent,
    NuevoPageComponent,
    ProductCardComponent,
    ProductoImagePipe,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductosRoutingModule,
    MaterialModule,
  ]
})
export class ProductosModule { }
