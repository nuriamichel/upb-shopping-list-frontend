import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface ListaDeListas {
  nombre: string;
  cantItems: number;
};

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  cItems: number = 0;

  listas: Array<ListaDeListas> = [
    {
      nombre: 'Lista de Shopping',
      cantItems: this.cItems,
    },
    {
      nombre: 'Lista de Shopping 2',
      cantItems: this.cItems,
    },
    {
      nombre: 'Lista de Shopping 2',
      cantItems: this.cItems,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  newList() {
    console.log('NUEVA LISTA')
  }

}
