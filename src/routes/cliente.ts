import { Router } from "express";
import { createCliente, deleteCliente, getCliente, getClientes, updateCliente } from "../controller/cliente";

const router = Router();

router.route('/')
    .get(getClientes)
    .post(createCliente);

router.route('/:id')
    .get(getCliente)
    .delete(deleteCliente)
    .put(updateCliente);

export default router;