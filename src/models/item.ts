import { BasicoPedido } from "./pedido";
import { BasicoProduto } from "./produto";

export interface BasicoItem {
    id: number;
    produto:BasicoProduto; 
    pedido: BasicoPedido; 
}
export interface Item extends BasicoItem {
    quantidade: number; 
}