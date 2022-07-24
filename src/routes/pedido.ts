import { Router } from "express";
import { createPedido, deletePedido, getPedido, getPedidos, updatePedido } from "../controller/pedido";

const PedidoRouter = Router();

PedidoRouter.route('/')
    .get(getPedidos)
    .post(createPedido);

PedidoRouter.route('/:id')
    .get(getPedido)
    .delete(deletePedido)
    .put(updatePedido);

export default PedidoRouter;