import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { Producto, TipoProducto } from 'src/app/productos/interfaces/producto.interface';
import { ProductosService } from 'src/app/productos/servicios/productos.service';
import { ConfirmDialogComponent } from 'src/app/productos/componentes/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-nuevo-page',
  templateUrl: './nuevo-page.component.html',
  styles: [
  ]
})
export class NuevoPageComponent implements OnInit{

  public productoForm = new FormGroup({
    id:        new FormControl(),
    nombre: new FormControl<string>('', { nonNullable: true }),
    precio: new FormControl(),
    stock: new FormControl(),
    descripcion: new FormControl(''),
    tipoProducto: new FormControl<TipoProducto>( TipoProducto.Computador ),
    imagen:    new FormControl(''),
  });

  public tiposProducto = [
    { id: 'Computador', desc: 'Computador' },
    { id: 'Celular', desc: 'Celular' },
    { id: 'Consola', desc: 'Consola' },
  ];

  constructor(
    private productosService: ProductosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
  ) {}

  get currentProducto(): Producto {
    const producto = this.productoForm.value as Producto;
    return producto;
  }

  ngOnInit(): void {

    if ( !this.router.url.includes('edit') ) return;

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.productosService.getProductoById( id ) ),
      ).subscribe( producto => {

        if ( !producto ) {
          return this.router.navigateByUrl('/');
        }

        this.productoForm.reset( producto );
        return;
      });

  }



  onSubmit():void {

    if ( this.productoForm.invalid ) return;

    if ( this.currentProducto.id ) {
      this.productosService.updateProducto( this.currentProducto )
        .subscribe( currentProducto => {
          this.router.navigate(['/productos/list']);
          this.showSnackbar(`${ this.currentProducto.nombre } actualizado!`);
        });

      return;
    }

    this.currentProducto.id = 0;
    this.productosService.addProducto( this.currentProducto )
      .subscribe( producto => {
        this.router.navigate(['/productos/list']);
        this.showSnackbar(`${ producto.nombre } created!`);
      });
  }

  onDeleteProducto() {
    if ( !this.currentProducto.id ) throw Error('Producto id is required');

    const dialogRef = this.dialog.open( ConfirmDialogComponent, {
      data: this.productoForm.value
    });

    dialogRef.afterClosed()
      .pipe(
        filter( (result: boolean) => result ),
        switchMap( () => this.productosService.deleteProductoById( this.currentProducto.id )),
        filter( (wasDeleted: boolean) => wasDeleted ),
      )
      .subscribe(() => {
        this.router.navigate(['/productos']);
      });
  }

  showSnackbar( message: string ):void {
    this.snackbar.open( message, 'done', {
      duration: 2500,
    })
  }


}
