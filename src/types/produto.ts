export interface ProdutoBasico {
    id: number; 
  }
  
  export interface Produto extends ProdutoBasico {
    nomeP: string; 
    area: string;
    preco: number;  
  }