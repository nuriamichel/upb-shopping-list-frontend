import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';

interface Producto {
  nombre: string;
  precio: string;
}

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  mostrarPrecio: boolean = true;

  @ViewChild(MatTable)
  table!: MatTable<any>;



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

  displayedColumns: string[] = ['nombre', 'precio', 'options'];

  constructor(private _fb: FormBuilder) {
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
    const valid = this.formList.valid;
    let arti = this.formList.value;
    if (valid) {
      console.log('FORM VALUE: ', arti);
      this.productos.push(arti)
      this.table.renderRows();
      console.log(this.productos)
      this.formList.reset();
    } else {
      this.formList.markAllAsTouched();
    }
    this.formList.reset();
  }

  removeAt(index: number) {
    console.log('borrar prod')
    const data = this.productos.splice(index, 1);
    
    this.table.renderRows();
  }

}
