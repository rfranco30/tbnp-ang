import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovimentoManualComponent } from './movimento-manual.component';


const routes: Routes = [
  { path: '', component: MovimentoManualComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovimentoManualRoutingModule { }


