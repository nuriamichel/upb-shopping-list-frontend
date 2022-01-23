import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { NavbarModule } from 'src/app/shared/navbar/navbar.module';
import { SidebarModule } from 'src/app/shared/sidebar/sidebar.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lists',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'lists',
        loadChildren: () => import('../lists/lists.module').then(m => m.ListsModule)
      }
    ]
  }
]

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    NavbarModule,
    SidebarModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
