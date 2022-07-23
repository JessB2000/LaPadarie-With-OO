export interface ClienteBasico {
  id: number; 
}

export interface Cliente extends ClienteBasico{
    nome: string; 
    endereco: string; 
    cpf: string;
}