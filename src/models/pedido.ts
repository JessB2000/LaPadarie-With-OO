export interface BasicoPedido {
    id: number;
}
export interface Pedido extends BasicoPedido {
    entrega: number; 
}