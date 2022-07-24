import { Router } from "express";
import { createItem, deleteItem, getItem, getItems, updateItem } from "../controller/item";

const ItemRouter = Router();

ItemRouter.route('/')
    .get(getItems)
    .post(createItem);

ItemRouter.route('/:id')
    .get(getItem)
    .delete(deleteItem)
    .put(updateItem);

export default ItemRouter;