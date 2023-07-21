import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Pipe({
  name: 'productoImage'
})
export class ProductoImagePipe implements PipeTransform {

  transform( producto: Producto ): string {

    if ( !producto.id && !producto.imagen ) {
      return 'assets/no-image.jpg';
    }

    if ( producto.imagen ) return producto.imagen; 

    return `assets/no-image.jpg`;

  }

}
