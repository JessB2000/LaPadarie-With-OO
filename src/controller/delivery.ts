import { Request, Response } from 'express'
import { connect } from '../db'
import { Delivery } from '../models/delivery';

export async function getDeliverys(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const delivery = await conn.query(`SELECT delivery.*, cliente.nome, cliente.endereco, cliente.cpf FROM delivery INNER JOIN cliente ON cliente.id = delivery.cliente_id`);
        return res.json(delivery[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function createDelivery(req: Request, res: Response) {
    const newDelivery: Delivery = req.body;
    const conn = await connect();
    await conn.query(`INSERT INTO delivery (codigo, cliente_id) VALUES(?, ?)`, [newDelivery.codigo, newDelivery.cliente]);
    res.json({
        message: 'Novo Delivery Criado'
    });
}

export async function getDelivery(req: Request, res: Response) {
    const id = req.params.id; 
    const conn = await connect();
    const delivery = await conn.query('SELECT delivery.*, delivery.cliente_id, cliente.nome, cliente.endereco, cliente.cpf FROM delivery INNER JOIN cliente ON cliente.id = delivery.cliente_id WHERE id = ?', [id]);
    res.json(delivery[0]);
}

export async function deleteDelivery(req: Request, res: Response) {
    const id = req.params.id;
    const conn = await connect();
    await conn.query('DELETE FROM delivery WHERE id = ?', [id]);
    res.json({
        message: 'Delivery Deletado'
    });
}

export async function updateDelivery(req: Request, res: Response) {
    const id = req.params.id;
    const updateDelivery: Delivery = req.body;
    const conn = await connect();
    await conn.query('`UPDATE delivery SET codigo = ?, cliente_id = ? WHERE id = ?', [updateDelivery.codigo, updateDelivery.cliente, updateDelivery.id]);
    res.json({
        message: 'Cliente Modificado'
    });
}