import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { DialogModule } from './dialog/dialog.module';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { EditDialogModule } from './edit-dialog/edit-dialog.module';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    DialogModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    MatMenuModule,
    EditDialogModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
