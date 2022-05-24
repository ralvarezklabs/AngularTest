import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablePivotComponent } from './components/table-pivot/table-pivot.component';

const routes: Routes = [
  {path:'', component: AppComponent },
  // {
  //   path: 'pivot',
  //   component: TablePivotComponent,
  //   loadChildren: () =>
  //     import('./components/table-pivot/table-pivot.module').then((m) => m.TablePivotModule),
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
