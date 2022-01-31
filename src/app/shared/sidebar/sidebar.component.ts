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

  constructor(public dialog: MatDialog) { }

  animal!: string;
  name!: string;

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogNuevaListaDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
/*******************************************************************/

@Component({
  selector: 'dialog-nueva-lista-dialog',
  templateUrl: 'dialog-nueva-lista-dialog.html',
})
export class DialogNuevaListaDialog {
  constructor(public dialogRef: MatDialogRef<DialogNuevaListaDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ListaDeListas) {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}