import { Request, Response } from 'express'


import { connect } from '../db'

import { Cliente } from '../models/cliente'

export async function getClientes(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const cliente = await conn.query(`SELECT cliente.*, pedido.entrega FROM cliente JOIN pedido ON pedido.id = cliente.pedido_id`);
        return res.json(cliente[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function createCliente(req: Request, res: Response) {
    const newCliente: Cliente = req.body;
    const conn = await connect();
    await conn.query(`INSERT INTO cliente (nome, endereco, cpf, pedido_id) VALUES (?, ?, ?, ?)`, [newCliente.nome, newCliente.endereco, newCliente.cpf, newCliente.pedido]);
    res.json({
        message: 'Novo Cliente Criado'
    });
}

export async function getCliente(req: Request, res: Response) {
    const id = req.params.id; 
    const conn = await connect();
    const cliente = await conn.query('SELECT cliente.*,pedido.entrega FROM cliente JOIN pedido ON pedido.id = cliente.pedido_id WHERE id = ?', [id]);
    res.json(cliente[0]);
}

export async function deleteCliente(req: Request, res: Response) {
    const id = req.params.id;
    const conn = await connect();
    await conn.query('DELETE FROM cliente WHERE id = ?', [id]);
    res.json({
        message: 'Cliente Deletado'
    });
}

export async function updateCliente(req: Request, res: Response) {
    const id = req.params.id;
    const updateCliente: Cliente = req.body;
    const conn = await connect();
    await conn.query('UPDATE cliente SET nome = ?, endereco = ?, cpf = ?, pedido_id = ? WHERE id = ?', [updateCliente.nome, updateCliente.endereco, updateCliente.cpf, updateCliente.pedido, updateCliente.id]);
    res.json({
        message: 'Cliente Modificado'
    });
}