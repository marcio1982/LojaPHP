export interface Pedido {
    id: number;
    idUsuario: number;
    dataPedido: Date;
    tipoPagamento: string;
    total: number;
    frete: number;
    precoPromocional: number;
    estoque: number;
    altura: number;
    largura: number;
    comprimento: number;
    peso: number;
}

export interface itensPedido extends Pedido {
    quantidade: number;
  }
  
  export const produtos = [
  
  ]
