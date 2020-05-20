import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../shared/model/produto';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProdutoService {

    constructor(private http: HttpClient) {

    }

    public getProdutos(): Observable<Produto[]>{
       return this.http.get<Produto[]>(environment.ms_produto_url);
    }


}