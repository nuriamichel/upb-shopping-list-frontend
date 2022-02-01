import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDialogComponent } from './edit-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    EditDialogComponent
  ],
  entryComponents: [EditDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class EditDialogModule { }
