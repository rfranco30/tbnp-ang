import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovimentoManualComponent } from './movimento-manual.component';
import { MovimentoManualRoutingModule } from './movimento-manual-routing.module';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ProdutoService } from '../core/service/produto.service';
import { MovimentoService } from '../core/service/movimento.service';

@NgModule({
  declarations: [MovimentoManualComponent],
  imports: [
    CommonModule,
    MovimentoManualRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule
  ],
  providers:[
    ProdutoService,
    MovimentoService,
  ]
})
export class MovimentoManualModule { }
