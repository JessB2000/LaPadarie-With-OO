import { Request, Response } from 'express'


import { connect } from '../db'
import { Produto } from '../models/produto';


export async function getProdutos(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const produto = await conn.query(`SELECT produto.* FROM produto`);
        return res.json(produto[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function createProduto(req: Request, res: Response) {
    const newProduto: Produto = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO produto (nomeP, area, preco) VALUES (?, ?, ?)', [newProduto.nomeP, newProduto.area, newProduto.preco]);
    res.json({
        message: 'Novo Produto Criado'
    });
}

export async function getProduto(req: Request, res: Response) {
    const id = req.params.id; 
    const conn = await connect();
    const cliente = await conn.query('SELECT * FROM produto WHERE id = ?', [id]);
    res.json(cliente[0]);
}

export async function deleteProduto(req: Request, res: Response) {
    const id = req.params.id;
    const conn = await connect();
    await conn.query('DELETE FROM produto WHERE id = ?', [id]);
    res.json({
        message: 'Produto Deletado'
    });
}

export async function updateProduto(req: Request, res: Response) {
    const id = req.params.id;
    const updateProduto: Produto = req.body;
    const conn = await connect();
    await conn.query('UPDATE produto SET nomeP = ?, area = ?, preco = ? WHERE id = ?', [updateProduto.nomeP, updateProduto.area, updateProduto.preco, updateProduto.id]);
    res.json({
        message: 'Produto Modificado'
    });
}