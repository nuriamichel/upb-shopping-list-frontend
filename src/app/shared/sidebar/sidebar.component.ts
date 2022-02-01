import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { DialogComponent } from './dialog/dialog.component';

export interface ListaDeListas {
  nombre: string;
  cantItems: number;
};

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  animal!: string;
  name!: string;

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



  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  newList(): void {
    console.log('NUEVA LISTA')
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
      console.log(this.animal)
      this.listas.push({ nombre: this.animal, cantItems: this.cItems });
    });
  }
}




