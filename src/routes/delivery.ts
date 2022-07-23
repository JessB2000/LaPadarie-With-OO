import { Router } from "express";
import { createDelivery, deleteDelivery, getDelivery, getDeliverys, updateDelivery } from "../controller/delivery";

const router = Router();

router.route('/')
    .get(getDeliverys)
    .post(createDelivery);

router.route('/:id')
    .get(getDelivery)
    .delete(deleteDelivery)
    .put(updateDelivery);

export default router;