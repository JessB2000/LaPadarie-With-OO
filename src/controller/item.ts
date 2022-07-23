import { Request, Response } from 'express'


import { connect } from '../db'
import { Item } from '../models/item';



export async function getItems(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const item = await conn.query(`SELECT produto.id, produto.nomeP, produto.area, item.quantidade, produto.preco FROM item JOIN produto ON item.id_produto = produto.id WHERE item.id_pedido = 1`);
        return res.json(item[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function createItem(req: Request, res: Response) {
    const newItem: Item = req.body;
    const conn = await connect();
    await conn.query(`INSERT INTO item (id_produto, id_pedido, quantidade) VALUES(?, ?, ?)`, [newItem]);
    res.json({
        message: 'Novo Item Criado'
    });
}

export async function getItem(req: Request, res: Response) {
    const id = req.params.id; 
    const conn = await connect();
    const cliente = await conn.query('SELECT produto.id, produto.nomeP, produto.area, item.quantidade, produto.preco FROM item JOIN produto ON item.id_produto = produto.id WHERE item.id_pedido = 1', [id]);
    res.json(cliente[0]);
}

export async function deleteItem(req: Request, res: Response) {
    const id = req.params.id;
    const conn = await connect();
    await conn.query('DELETE FROM item WHERE id = ?', [id]);
    res.json({
        message: 'Item Deletado'
    });
}

export async function updateItem(req: Request, res: Response) {
    const id = req.params.id;
    const updateItem: Item = req.body;
    const conn = await connect();
    await conn.query('`UPDATE item SET id_produto = ?, id_pedido = ?, quantidade = ? WHERE id = ?`', [updateItem, id]);
    res.json({
        message: 'Item Modificado'
    });
}