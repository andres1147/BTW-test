import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Producto } from 'src/app/productos/interfaces/producto.interface';
import { ProductosService } from 'src/app/productos/servicios/productos.service';

@Component({
  selector: 'app-producto-page',
  templateUrl: './producto-page.component.html',
  styles: [
  ]
})
export class ProductoPageComponent implements OnInit {

  public producto?: Producto;

  constructor(
    private productosService: ProductosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.productosService.getProductoById( id )),
      )
      .subscribe( producto => {

        if ( !producto ) return this.router.navigate([ '/productos/list' ]);

        this.producto = producto;
        console.log(producto);
        return;
      })
  }

  goBack():void {
    this.router.navigateByUrl('productos/list')
  }


}
