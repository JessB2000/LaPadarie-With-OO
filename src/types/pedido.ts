export interface PedidoBasico {
    id: number; 
  }
  
  export interface Pedido extends PedidoBasico{
    entrega: number; 
  }