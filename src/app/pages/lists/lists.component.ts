import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import {Product} from "../../models/product";
import {UsersService} from "../../services/users.service";
import { FormControl, AbstractControl } from '@angular/forms';
import { Observable, merge } from 'rxjs';

class Todo {
  id!: string;
  description!: string;
  complete!: boolean;
}

interface Producto {
  nombre: string;
  precio: string;
}

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
  providers: [UsersService]

})
export class ListsComponent implements OnInit {

  mostrarPrecio: boolean = true;
  modProduct? : Product
  listProd:Product[]=[]
  listProdTached:Product[]=[]

  @ViewChild('tableOG')
  table!: MatTable<any>;


  @ViewChild('tachado') tachadoTable!: MatTable<any>;


  @Output() btnClick = new EventEmitter<string>()

  formList: FormGroup;

  productos: Producto[] = [
    {
      nombre: 'Coca-Cola',
      precio: '10'
    },
    {
      nombre: 'Pepsi',
      precio: '20'
    }
  ];

  productosTachados: Producto[] = [];

  displayedColumns: string[] = ['nombre', 'precio', 'options'];
  displayedColumnsTachados: string[] = ['nombre', 'precio', 'options'];

  constructor(private usersService: UsersService,private _fb: FormBuilder) {
    this.formList = this._fb.group({
      nombre: ['', [Validators.required]],
      precio: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]]
    });
  }

  ngOnInit(): void {
    this.getProducts(localStorage.getItem('mail')!, localStorage.getItem('lista')!)
    this.getProductsBuyed(localStorage.getItem('mail')!, localStorage.getItem('lista')!)
  }

  form: FormGroup = new FormGroup({
    priceUSD: new FormControl(false),
  });

  priceUSD = this.form.get('priceUSD');

  columns!: string[];

  columnDefinitions = [
    { def: 'priceUSD', label: 'Mostrar Precio', hide: this.priceUSD?.value }
  ];

  getDisplayedColumns() {
    this.columns = this.columnDefinitions.filter(cd => !cd.hide).map(cd => cd.def);
  }



  ngAfterViewInit() {
    /*let o1: Observable<boolean> = this.priceUSD.valueChanges;

    merge(o1).subscribe(v => {
      this.columnDefinitions[0].hide = this.priceUSD?.value;
      console.log(this.columnDefinitions);

      this.getDisplayedColumns();
    });

    this.getDisplayedColumns();*/
  }


  showPrice() {
    this.mostrarPrecio = !this.mostrarPrecio;
  }

  sendForm() {
    console.log('APRETADO')
    this.getProducts(localStorage.getItem('mail')!, localStorage.getItem('lista')!)
    this.getProductsBuyed(localStorage.getItem('mail')!, localStorage.getItem('lista')!)

    const valid = this.formList.valid;
    let arti = this.formList.value;
    if (valid) {
      console.log('FORM VALUE: ', arti);
      this.modProduct = new Product(Number(localStorage.getItem('numList')!), this.formList.value.nombre, false, this.formList.value.precio)
      this.productos.push(arti)
      this.table.renderRows();
      console.log(this.productos)
      this.formList.reset();


      //add product
      this.addProduct(this.modProduct)

      //get products
      this.getProducts(localStorage.getItem('mail')!, localStorage.getItem('lista')!)

    } else {
      this.formList.markAllAsTouched();
    }
    this.formList.reset();//poner algo mas interactivo, como que vibre el forms
  }

  addProduct(prod:Product){
    this.usersService.addProduct(prod)
      .subscribe(res => {
        console.log(res)
      })
  }

  getProducts(mail:string, list:string){
    this.usersService.getProducts(mail,list)
      .subscribe(res => {
        console.log(res)
        if (res != null) {

          // @ts-ignore
          this.listProd = res
        }

      })
  }

  getProductsBuyed(mail:string, list:string){
    this.usersService.getProductsTached(mail,list)
      .subscribe(res => {
        console.log(res)
        if (res != null){
          // @ts-ignore
          this.listProdTached = res

        }


      })
  }

  getActList(mail:string, list:string){
    this.usersService.getActualList(mail,list)
      .subscribe(res => {
        console.log(res)

      })
  }

  delProduct(id:number){
    this.usersService.delProd(id)
      .subscribe(res => {
        console.log(res)
        this.getProducts(localStorage.getItem('mail')!, localStorage.getItem('lista')!)

      })
  }

  updProduct(id:number){
    this.usersService.updateProd(id)
      .subscribe(res => {
        console.log(res)
        this.getProducts(localStorage.getItem('mail')!, localStorage.getItem('lista')!)

      })
  }
  tachado(index: number) {
    console.log('TACHADO');

    console.log(this.listProd[index])
    // @ts-ignore
    this.updProduct(this.listProd[index].id)
  }

  destachado(index: number) {
    this.productos.push({
      nombre: this.productosTachados[index].nombre,
      precio: this.productosTachados[index].precio
    });
    this.productosTachados.splice(index, 1);
    this.table.renderRows();
    this.tachadoTable.renderRows();
    console.log(this.productos)
    console.log(this.productosTachados)
  }

  removeAt(index: number) {
    console.log('borrar prod')


    console.log(this.listProd[index])
    // @ts-ignore
    this.delProduct(this.listProd[index].id)
  }

  removeAtTachados(index: number) {
    console.log('borrar prod tachado')
    this.productosTachados.splice(index, 1);

    this.table.renderRows();
    this.tachadoTable.renderRows();
  }

}
