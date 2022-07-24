import { Router } from "express";
import { createProduto, deleteProduto, getProduto, getProdutos, updateProduto } from "../controller/produto";

const ProdutoRouter = Router();

ProdutoRouter.route('/')
    .get(getProdutos)
    .post(createProduto);

ProdutoRouter.route('/:id')
    .get(getProduto)
    .delete(deleteProduto)
    .put(updateProduto);

export default ProdutoRouter;