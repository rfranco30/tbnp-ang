import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',   redirectTo: '/movimento-manual', pathMatch: 'full' },
  {
    path: 'movimento-manual',
    loadChildren: () => import('./movimento-manual/movimento-manual.module').then(m => m.MovimentoManualModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
