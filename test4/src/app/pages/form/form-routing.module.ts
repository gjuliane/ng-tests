import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'add',
        component: AddComponent
      },
      {
        path: 'add',
        component: AddComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'edit/:id',
        component: AddComponent
      },
      {
        path: '**',
        redirectTo: 'add'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
