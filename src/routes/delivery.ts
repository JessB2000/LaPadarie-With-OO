import { Router } from "express";
import { createDelivery, deleteDelivery, getDelivery, getDeliverys, updateDelivery } from "../controller/delivery";

const DeliveryRouter = Router();

DeliveryRouter.route('/')
    .get(getDeliverys)
    .post(createDelivery);

DeliveryRouter.route('/:id')
    .get(getDelivery)
    .delete(deleteDelivery)
    .put(updateDelivery);

export default DeliveryRouter;