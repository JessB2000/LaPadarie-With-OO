import { Request, Response } from 'express'


import { connect } from '../db'
import { Pedido } from '../models/pedido';



export async function getPedidos(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const pedido = await conn.query(`SELECT pedido.*, sum(item.quantidade * produto.preco) AS subtotal FROM pedido LEFT JOIN item ON item.pedido_id = pedido.id LEFT JOIN produto ON produto.id = item.produto_id`);
        return res.json(pedido[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function createPedido(req: Request, res: Response) {
    const newPedido: Pedido = req.body;
    const conn = await connect();
    await conn.query(`INSERT INTO pedido (entrega) VALUES('?')`, [newPedido]);
    res.json({
        message: 'Novo Pedido Criado'
    });
}

export async function getPedido(req: Request, res: Response) {
    const id = req.params.id; 
    const conn = await connect();
    const pedido = await conn.query('SELECT pedido.*, sum(item.quantidade * produto.preco) AS subtotal FROM pedido LEFT JOIN item ON item.pedido_id = pedido.id LEFT JOIN produto ON produto.id = item.produto_id WHERE id = ?', [id]);
    res.json(pedido[0]);
}

export async function deletePedido(req: Request, res: Response) {
    const id = req.params.id;
    const conn = await connect();
    await conn.query('DELETE FROM pedido WHERE id = ?', [id]);
    res.json({
        message: 'Pedido Deletado'
    });
}

export async function updatePedido(req: Request, res: Response) {
    const id = req.params.id;
    const updatePedido: Pedido = req.body;
    const conn = await connect();
    await conn.query('UPDATE pedido SET entrega = ? WHERE id = ?', [updatePedido, id]);
    res.json({
        message: 'Pedido Modificado'
    });
}