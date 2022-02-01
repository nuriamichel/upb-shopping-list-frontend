import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { DialogComponent } from './dialog/dialog.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';


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

  animal2!: string;
  name2!: string;

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

  compartirLL(i: number) {
    console.log('COMPARTIR LL')
  }
  principalLL(i: number) {
    console.log('PRINCIPAL LL')
  }

  editarLL(i: number) {
    console.log('EDITAR LISTA')
    let dialogRef = this.dialog.open(EditDialogComponent, {
      width: '500px',
      data: { name2: this.listas[i].nombre, animal2: this.animal2 }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal2 = result;
      console.log(this.animal2)
      this.listas[i].nombre = this.animal2;
      //(i, 1, { nombre: this.animal2, cantItems: this.cItems });
    });
  }

  borrarLL(i: number) {
    console.log('BORRAR LL')
    this.listas.splice(i, 1);
  }

}




