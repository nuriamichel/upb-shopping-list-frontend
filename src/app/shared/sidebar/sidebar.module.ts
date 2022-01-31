import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { FormModule } from 'src/app/shared/form/form.module';




@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FormModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
