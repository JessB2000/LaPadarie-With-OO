import { BasicoPedido } from "./pedido";

export interface BasicoCliente {
    id: number;
    produto:BasicoPedido; 
}

export interface Cliente extends BasicoCliente {
    nome: string; 
    endereco: string; 
    cpf: string;
}