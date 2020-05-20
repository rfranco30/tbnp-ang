import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutoService } from '../core/service/produto.service';
import { Produto } from '../core/shared/model/produto';
import { MovimentoService } from '../core/service/movimento.service';
import { Movimento } from '../core/shared/model/movimento';
import { MovimentoManual } from '../core/shared/model/movimento-manual';

@Component({
  selector: 'app-movimento-manual',
  templateUrl: './movimento-manual.component.html',
  styleUrls: ['./movimento-manual.component.scss']
})
export class MovimentoManualComponent implements OnInit {
  public formGrp: FormGroup;
  public edit = true;
  public produtos: Array<Produto> = [];
  public movimentos: Array<Movimento> = [];
  public mensagem: string;
  public proxLancamento: number;
  public listCofis: [{
    codCofis: string,
    codClasificacao: string,
  }];
  constructor(
    private  formBuilder: FormBuilder,
    private readonly produtoService: ProdutoService,
    private readonly movimentoService: MovimentoService,
  ) { }

  ngOnInit() {

    this.formGrp = this.formBuilder.group({
      datMes: ['', [Validators.required, Validators.min(1), Validators.max(12), Validators.maxLength(2)]],
      datAno: ['', [Validators.required, Validators.min(1970), Validators.max(9999), Validators.maxLength(4)]],
      codProduto: ['', Validators.required],
      codCosif: ['', Validators.required],
      valValor: ['', Validators.required],
      desDescricao: [''],
    });
    this.disable();
    this.getProdutos();
    this.getMovimentos();
    this.getProxLancamento();
  }

  public getProxLancamento() {
    this.movimentoService.getProxLancamento().subscribe(
      (list) => { this.proxLancamento = list; },
      (error: any) => { this.mensagem = 'Não foi possivel obter os movimentos.'; }
    );
  }

  public getMovimentos() {
    this.movimentoService.getMovimentos().subscribe(
      (list) => { this.movimentos = list; },
      (error: any) => { this.mensagem = 'Não foi possivel obter os movimentos.'; }
    );
  }
  public getProdutos() {
    this.produtoService.getProdutos().subscribe(
      (list) => { this.produtos = list; },
      (error: any) => { this.mensagem = 'Não foi possivel obter os produtos.'; }
    );
  }

  public onSelectProduto(option) {
    let produto = this.produtos.find(p => p.codProduto === option.value);
    this.listCofis = produto.cofisList;
  }

  public disable() {
    this.formGrp.controls['datMes'].disable();
    this.formGrp.controls['datAno'].disable();
    this.formGrp.controls['valValor'].disable();
    this.formGrp.controls['desDescricao'].disable();
  }
  public enable() {
    this.edit = !this.edit;
    this.formGrp.controls['datMes'].enable();
    this.formGrp.controls['datAno'].enable();
    this.formGrp.controls['valValor'].enable();
    this.formGrp.controls['desDescricao'].enable();
  }
  public limpar() {
    this.formGrp.controls['datMes'].setValue('');
    this.formGrp.controls['datAno'].setValue('');
    this.formGrp.controls['valValor'].setValue('');
    this.formGrp.controls['desDescricao'].setValue('');
    this.formGrp.controls['codProduto'].setValue('');
    this.formGrp.controls['codCosif'].setValue('');
  }

  public onSubmit() {
    const movManual: MovimentoManual = this.formGrp.getRawValue();
    movManual.numLancamento = this.proxLancamento + 1;
    this.movimentoService.insertMovimentoManual(movManual).subscribe(
      (list) => { },
      (error: any) => { this.mensagem = 'Não foi possivel obter os movimentos.'; }
    );
  }
}
