import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { DialogComponent } from './dialog/dialog.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { UsersService } from "../../services/users.service";
import { List } from "../../models/list";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';


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
  styleUrls: ['./sidebar.component.css'],
  providers: [UsersService]

})
export class SidebarComponent implements OnInit {

  listaP$: Observable<List> | undefined

  listasSuscribe: any[]
  listasLoaded: boolean

  animal!: string;
  name!: string;

  animal2!: string;
  name2!: string;

  cItems: number = 0;

  listaPrinc?:List
  listaOthers?:List[]= []

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




  constructor(private usersService: UsersService, public dialog: MatDialog, private _router: Router) {
    this.listasSuscribe = [];
    this.listasLoaded = false;
  }

  ngOnInit(): void {
    if (localStorage.getItem('logged') == "true") {

      this.getListaPrincipal(localStorage.getItem('mail')!)
      this.getListOther(localStorage.getItem('mail')!)
    }



  }

  getListasAsyncPipe() {
    /*this.listaP$ = this.usersService.getLists('mail')
      .pipe(tap(res => {
        console.log('res', res);
      }))*/
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
      //this.listas.push({ nombre: this.animal, cantItems: this.cItems });
      this.addList(localStorage.getItem('mail')!, this.animal)
      this.getListaPrincipal(localStorage.getItem('mail')!)
      this.getListOther(localStorage.getItem('mail')!)

    });
  }

  addList(email: string, name: string) {
    this.usersService.addList(email, name)
      .subscribe(res => {
        console.log(res)

      })
  }


  compartirLL(i: number) {
    console.log('COMPARTIR LL')
    //this._router.navigate(['main/share']);
  }
  principalLL(i: number) {
    console.log('PRINCIPAL LL');
    let temp = this.listas[i]
    this.listas.splice(i, 1);
    this.listas.unshift(temp)
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

      if (i !=99) {
        // @ts-ignore
        this.updateList(this.listaOthers[i].id, this.animal2)
        this.getListaPrincipal(localStorage.getItem('mail')!)
        this.getListOther(localStorage.getItem('mail')!)
        //(i, 1, { nombre: this.animal2, cantItems: this.cItems });
      }else {
        // @ts-ignore
        this.updateList(this.listaPrinc.id, this.animal2)
        this.getListaPrincipal(localStorage.getItem('mail')!)
        this.getListOther(localStorage.getItem('mail')!)
      }
    });
  }

  borrarLL(i: number) {
    console.log('BORRAR LL')
      // @ts-ignore
      this.delList(this.listaOthers[i].id)
      this.getListaPrincipal(localStorage.getItem('mail')!)
      this.getListOther(localStorage.getItem('mail')!)

  }


  getListasSuscribe(email: string) {
    this.listasLoaded = false;
    this.usersService.getListsOther(email).subscribe(res => {
      //this.listasSuscribe = res
      this.listasLoaded = true
      console.log('res', res)

    });
  }

  async getListaPrincipal(mail:string){
    this.usersService.getLists(mail)
      .subscribe(res => {
        console.log(res)
        // @ts-ignore
        this.listaPrinc = res


      })
      
  }

  async getListOther(mail:string){
    this.usersService.getListsOther(mail)
      .subscribe(res => {
        console.log(res)
        if (res != null) {

          // @ts-ignore
          this.listaOthers = res
        }

      })
  }

  async updateList(lisid:number,name:string){
    this.usersService.updateList(lisid,name)
      .subscribe(res => {
        console.log(res)
        if (res != null) {

        }

      })
  }
  async delList(lisid:number){
    this.usersService.delList(lisid)
      .subscribe(res => {
        console.log(res)

      })
  }
}




