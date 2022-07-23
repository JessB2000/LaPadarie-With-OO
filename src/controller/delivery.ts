import { Request, Response } from 'express'
import { connect } from '../db'
import { Delivery } from '../models/delivery';

export async function getDeliverys(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const delivery = await conn.query(`SELECT delivery.*, cliente.nome, cliente.endereco, cliente.cpf FROM delivery INNER JOIN cliente ON cliente.id = delivery.id_cliente`);
        return res.json(delivery[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function createDelivery(req: Request, res: Response) {
    const newDelivery: Delivery = req.body;
    const conn = await connect();
    await conn.query(`INSERT INTO delivery (entrega, id_cliente) VALUES(?, ?)`, [newDelivery]);
    res.json({
        message: 'Novo Delivery Criado'
    });
}

export async function getDelivery(req: Request, res: Response) {
    const id = req.params.id; 
    const conn = await connect();
    const delivery = await conn.query('SELECT delivery.*, delivery.id_cliente, cliente.nome, cliente.endereco, cliente.cpf FROM delivery INNER JOIN cliente ON cliente.id = delivery.id_cliente WHERE id = ?', [id]);
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
    await conn.query('`UPDATE delivery SET entrega = ?, id_cliente = ? WHERE id = ?', [updateDelivery, id]);
    res.json({
        message: 'Cliente Modificado'
    });
}