import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import {Product} from "../../models/product";
import {UsersService} from "../../services/users.service";

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

  @ViewChild(MatTable)
  table!: MatTable<any>;

  update(row: any): void {

  }


  @Output() btnClick = new EventEmitter<string>()

  formList: FormGroup;

  productos: Producto[] = [
    {
      nombre: 'Coca-Cola',
      precio: '10'
    },
    {
      nombre: 'Coca-Cola',
      precio: '10'
    }
  ];

  displayedColumns: string[] = ['nombre', 'precio'];

  constructor(private usersService: UsersService,private _fb: FormBuilder) {
    this.formList = this._fb.group({
      nombre: ['', [Validators.required]],
      precio: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]]
    });
  }

  ngOnInit(): void {
  }

  showPrice() {
    this.mostrarPrecio = !this.mostrarPrecio;
  }

  sendForm() {
    console.log('APRETADO')
    this.getProducts("rodrigoquiroz308@gmail.com")
    const valid = this.formList.valid;
    let arti = this.formList.value;
    if (valid) {
      console.log('FORM VALUE: ', arti);
      this.modProduct = new Product(7, this.formList.value.nombre, false, this.formList.value.precio)
      this.addProduct(this.modProduct)
      this.productos.push(arti)
      this.table.renderRows();
      console.log(this.productos)
      this.formList.reset();
    } else {
      this.formList.markAllAsTouched();
    }
    this.formList.reset();
  }

  addProduct(prod:Product){
    this.usersService.addProduct(prod)
      .subscribe(res => {
        console.log(res)
      })
  }

  getProducts(mail:string){
    this.usersService.getProducts(mail)
      .subscribe(res => {
        console.log(res)
        // @ts-ignore
        this.listProd = res
        console.log(this.listProd)
        console.log(this.listProd[0])
        console.log(this.listProd[0].precio)

      })
  }
}
