import { BasicoCliente } from "./cliente";

export interface BasicoDelivery {
    id: number;
    cliente:BasicoCliente; 

}

export interface Delivery extends BasicoDelivery {
    codigo: number; 
}