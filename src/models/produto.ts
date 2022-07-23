export interface BasicoProduto {
    id: number; 
}
export interface Produto extends BasicoProduto{
    nomeP: string; 
    area: string;
    preco: number;
}