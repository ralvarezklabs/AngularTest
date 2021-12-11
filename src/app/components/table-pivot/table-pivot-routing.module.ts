import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablePivotComponent } from './table-pivot.component';

const routes: Routes = [
  {path:'', component: TablePivotComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablePivotRoutingModule { }
