import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShareComponent } from './share.component';

const routes: Routes = [
  {
    path: 'share',
    component: ShareComponent
  }
];

@NgModule({
  declarations: [ShareComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ShareModule { }
