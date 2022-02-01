export class Product {
  constructor(listaid= 0, producto='', buyed=false,precio=0) {
    this.listaid = listaid
    this.producto = producto
    this.buyed = buyed
    this.precio = precio
  }

  listaid!:number;
  producto!:string;
  buyed!:boolean;
  precio!:number;
}
