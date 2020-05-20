export interface Produto {
    codProduto: string;
    descProduto: string;
    cofisList: [{
        codCofis: string,
        codClasificacao: string,
    }];
}