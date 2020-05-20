import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../shared/model/produto';
import { environment } from 'src/environments/environment';
import { Movimento } from '../shared/model/movimento';
import { MovimentoManual } from '../shared/model/movimento-manual';

@Injectable()
export class MovimentoService {

    constructor(private http: HttpClient) {

    }

    public getMovimentos(): Observable<Movimento[]> {
        return this.http.get<Movimento[]>(environment.ms_movimento_url);
    }

    public insertMovimentoManual(movimento: MovimentoManual) {
        return this.http.post(environment.ms_movimento_url, movimento);
    }

    public getProxLancamento(): Observable<number>{
        return this.http.get<number>(`${environment.ms_movimento_url}?lancamento=max`);
    }

}