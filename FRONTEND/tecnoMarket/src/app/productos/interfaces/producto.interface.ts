
export interface Producto {
  id:           number;
  nombre:       string;
  precio:       string;
  stock:        string;
  descripcion:  string;
  tipoProducto: TipoProducto;
  imagen:       string;
}

export enum TipoProducto {
  Computador = "Computador",
  Celular = "Celular",
}
