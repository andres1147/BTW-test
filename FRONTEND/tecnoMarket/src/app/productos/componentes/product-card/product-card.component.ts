import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'productos-product-card',
  templateUrl: './product-card.component.html',
  styles: [
  ]
})
export class ProductCardComponent implements OnInit {

  @Input()
  public producto!: Producto;


  ngOnInit(): void {
    if ( !this.producto ) throw Error('La propiedad producto es requerida');
  }
  
}
