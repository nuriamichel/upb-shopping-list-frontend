import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './lists.component';
import { FormModule } from 'src/app/shared/form/form.module';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatTableModule } from "@angular/material/table";
//import { MatCheckboxModule } from "@angular/material";

//import { MatButtonToggleModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ListsComponent
  }
]

@NgModule({
  declarations: [ListsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormModule,
    ButtonModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSortModule,
    ReactiveFormsModule,
    FormsModule,
    //MatCheckboxModule
  ]
})
export class ListsModule { }
