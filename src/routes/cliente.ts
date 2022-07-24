import { Router } from "express";
import { createCliente, deleteCliente, getCliente, getClientes, updateCliente } from "../controller/cliente";

const ClienteRouter = Router();

ClienteRouter.route('/')
    .get(getClientes)
    .post(createCliente);

ClienteRouter.route('/:id')
    .get(getCliente)
    .delete(deleteCliente)
    .put(updateCliente);

export default ClienteRouter;