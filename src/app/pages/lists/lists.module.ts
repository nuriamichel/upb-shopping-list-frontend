import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './lists.component';
import { FormModule } from 'src/app/shared/form/form.module';
import { ButtonModule } from 'src/app/shared/button/button.module';

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
    ButtonModule
  ]
})
export class ListsModule { }
