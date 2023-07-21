import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/productos/interfaces/producto.interface';
import { HttpClient } from '@angular/common/http';
import { ProductosService } from 'src/app/productos/servicios/productos.service';

@Component({
  selector: 'app-lista-page',
  templateUrl: './lista-page.component.html',
  styles: [
  ]
})
export class ListaPageComponent implements OnInit {

  public productos: Producto[] = [];

  constructor( private productosService: ProductosService ) {}

  ngOnInit(): void {
      this.productosService.getProductos()
      .subscribe( productos => this.productos = productos );
  }

}

