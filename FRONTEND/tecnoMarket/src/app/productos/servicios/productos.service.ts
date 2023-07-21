import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

import { Producto } from '../interfaces/producto.interface';
import { environments } from '../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class ProductosService {

  private baseUrl: string = environments.baseUrl;


  constructor(private http: HttpClient) { }
  


  getProductos():Observable<Producto[]> {
    return this.http.get<Producto[]>(`${ this.baseUrl }/productos`);
  }

  getProductoById( id: string ): Observable<Producto|undefined> {
    return this.http.get<Producto>(`${ this.baseUrl }/productos/${ id }`)
      .pipe(
        catchError( error => of(undefined) )
      );
  }

  addProducto( producto: Producto ): Observable<Producto> {
    return this.http.post<Producto>(`${ this.baseUrl }/productos`, producto );
  }

  updateProducto( producto: Producto ): Observable<Producto> {
    if ( !producto.id ) throw Error('Hero id is required');

    return this.http.put<Producto>(`${ this.baseUrl }/productos/${ producto.id }`, producto );
  }

  deleteProductoById( id: number ): Observable<boolean> {

    return this.http.delete(`${ this.baseUrl }/productos/${ id }`)
      .pipe(
        map( resp => true ),
        catchError( err => of(false) ),
      );
  }




}
