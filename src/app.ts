import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import ClienteRouter from './routes/cliente';
import DeliveryRouter from './routes/delivery';
import ItemRouter from './routes/item';
import PedidoRouter from './routes/pedido';
import ProdutoRouter from './routes/produto';

export class App {
    public app: express.Application; 
    private port = 3000; 
    constructor(){
     this.app = express(); 
     this.middlewares(); 
     this.routes(); 

    }
    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }
    private routes() {
        this.app.use('/cliente', ClienteRouter);
        this.app.use('/delivery', DeliveryRouter);
        this.app.use('/item',ItemRouter);
        this.app.use('/pedido', PedidoRouter); 
        this.app.use('/produto',ProdutoRouter); 
    }
    async listen(): Promise<void> {
        await this.app.listen(this.port); 
    }
}
